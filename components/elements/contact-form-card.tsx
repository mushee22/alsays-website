'use client';

import { STRAPI_BASE_URL_WITH_API } from "@/lib/config";
import { ContactFormSchema } from "@/schema/contact-form";
import { useFormik } from "formik";
import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";
import { Alert, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactFormCard() {

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            agree: false,
            isSuccess: false,
            status: "",
        },
        validationSchema: ContactFormSchema,
        onSubmit: async (values, helpers) => {
            try {
                helpers.setSubmitting(true);
                const response = await fetch(STRAPI_BASE_URL_WITH_API + '/contact-forms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        data: {
                            firsName: values.first_name,
                            lastName: values.last_name,
                            email: values.email,
                            message: values.message,
                        }
                    }
                    )
                })

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
        <div className="py-5 md:py-10 px-4 md:px-8 bg-card border rounded-2xl border-grey-100 ">
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
                            <AlertTitle>Success! Your form has been submitted</AlertTitle>
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
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="last_name" className="required-label">Message</Label>
                    <Textarea  {...formik.getFieldProps('message')} placeholder="Message" className="w-full h-[135px]" />
                    {
                        formik.touched.message && formik.errors.message ? (
                            <div className="text-primary text-sm">{formik.errors.message}</div>
                        ) : null
                    }
                </div>
                <Label className="text-[#535862] body-md" htmlFor="agree">
                    <Checkbox className="bg-white" id="agree" />
                    You agree to our friendly
                    <Link href={"/privacy-and-policy"} className="underline">privacy policy</Link>.
                </Label>
                <Button className="w-full" disabled={formik.isSubmitting}>Send Message</Button>
            </form>
        </div>
    )
}
