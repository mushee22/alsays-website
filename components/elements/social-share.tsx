'use client'
import Icon from "@/assets/svg";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton
} from "react-share";

export default function SocialShare() {
    return (
        <Popover>
            <PopoverTrigger>
                <Icon.Share />
            </PopoverTrigger>
            <PopoverContent className="flex justify-around w-fit gap-x-2 shadow-card-sm border">
                <EmailShareButton url="">
                    <EmailIcon size={32} className="rounded-full"/>
                </EmailShareButton>
                <FacebookShareButton url="">
                    <FacebookIcon size={32} className="rounded-full"/>
                </FacebookShareButton>
                <LinkedinShareButton url="">
                    <LinkedinIcon size={32} className="rounded-full"/>
                </LinkedinShareButton>
            </PopoverContent>
        </Popover>
    )
}
