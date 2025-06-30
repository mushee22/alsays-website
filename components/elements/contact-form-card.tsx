import Link from "next/link";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactFormCard() {
    return (
        <div className="py-5 md:py-10 px-4 md:px-8 bg-card border rounded-2xl border-grey-100 ">
            <form className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-8">
                    <div className="space-y-1.5">
                        <Label htmlFor="first_name" className="required">First name</Label>
                        <Input required name="first_name" placeholder="First name" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="last_name" className="required">Last name</Label>
                        <Input required name="last_name" placeholder="Last name" />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="last_name" className="required">Email</Label>
                    <Input type="email" required name="last_name" placeholder="Last name" />
                </div>
                <div className="space-y-1.5 w-full">
                    <Label htmlFor="last_name" className="required">Message</Label>
                    <Textarea required defaultValue="" name="last_name" placeholder="Message" className="w-full h-[135px]" />
                </div>
                <Label className="text-[#535862] body-md" htmlFor="agree">
                    <Checkbox required className="bg-white" id="agree" />
                    You agree to our friendly <Link href={"/privacy-and-policy"} className="underline">privacy policy</Link>.
                </Label>
                <Button className="w-full">Send Message</Button>
            </form>
        </div>
    )
}
