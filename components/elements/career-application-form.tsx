'use client';

import { STRAPI_BASE_URL_WITH_API } from "@/lib/config";
import { useFormik } from "formik";
import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle } from "../ui/alert";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import mutation from "@/api/mutation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ApplicationFormSchema } from "@/schema/apllication-schema";


export default function CareerApplicationForm({ id }: { id?: string }) {

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            file: '',
            isSuccess: false,
            status: "",
        },
        validationSchema: ApplicationFormSchema,
        onSubmit: async (values, helpers) => {
            try {
                helpers.setSubmitting(true);

                const formData = new FormData();

                formData.append('files', values.file);

                const fileUpload = await fetch(STRAPI_BASE_URL_WITH_API + '/upload', {
                    method: 'POST',
                    body: formData,
                })

                if (!fileUpload.ok) {
                    helpers.setFieldValue('status', 'error');
                    return;
                }

                const fileResponse = await fileUpload.json();
                const fileId = fileResponse[0].id;

                const body = JSON.stringify({
                    data: {
                        firstName: values.first_name,
                        lastName: values.last_name,
                        email: values.email,
                        career: id,
                        resume: fileId,
                    }
                });

                const response = await mutation('applications', body)

                if (!response.ok) {
                    helpers.setFieldValue('status', 'error');
                    return;
                }

                helpers.setFieldValue('status', 'success');

                setTimeout(() => {
                    helpers.setFieldValue('status', '');
                    helpers.resetForm();
                }, 2000)

            } catch (error) {
                helpers.setFieldValue('status', 'error');
                console.error("Error submitting form:", error);
            } finally {
                helpers.setSubmitting(false);
            }
        }
    })

    return (

        <Dialog>
            <DialogTrigger className={cn(buttonVariants({}))}>
                Apply now
            </DialogTrigger>
            <DialogContent className="p-0">
                <DialogHeader className="h-0 w-0 overflow-hidden">
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-5 px-8 rounded-2xl border-grey-100 ">
                    <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                        {
                            formik.values.status === 'error' ? (
                                <Alert variant="destructive">
                                    <AlertTitle>Error! Please try again later.</AlertTitle>
                                </Alert>
                            ) : null
                        }

                        {
                            formik.values.status === 'success' ? (
                                <Alert>
                                    <CheckCircle2Icon />
                                    <AlertTitle>Success! Your application has been submitted</AlertTitle>
                                </Alert>
                            ) : null
                        }

                        <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-8">
                            <div className="space-y-1.5">
                                <Label htmlFor="first_name" className="required-label">First name</Label>
                                <Input {...formik.getFieldProps('first_name')} placeholder="First name" />
                                {formik.touched.first_name && formik.errors.first_name ? (
                                    <div className="text-primary text-sm">{formik.errors.first_name}</div>
                                ) : null}
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="last_name" className="required-label">Last name</Label>
                                <Input {...formik.getFieldProps('last_name')} placeholder="Last name" />
                                {formik.touched.last_name && formik.errors.last_name ? (
                                    <div className="text-primary text-sm">{formik.errors.last_name}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="last_name" className="required-label">Email</Label>
                            <Input type="email" {...formik.getFieldProps('email')} placeholder="Enter email" />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-primary text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="file" className="required-label">Resume</Label>
                            <Input
                                type="file"
                                required
                                accept="application/pdf,image/*"
                                onChange={(event) => {
                                    formik.setFieldValue('file', event.currentTarget.files ? event.currentTarget.files[0] : '');
                                }}
                            />
                        </div>

                        <Button className="w-full" disabled={formik.isSubmitting}>Send Application</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>

    )
}
