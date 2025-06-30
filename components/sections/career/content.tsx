import MarkDownContent from "@/components/elements/markdown-content";
import Container from "@/components/ui/container";
import LinkButton from "@/components/ui/link-button";
import { markdown } from "../blog/content";

export default function ContentSection() {
  return (
    <Container className="max-w-[900px] py-12 space-y-5 md:space-y-10">
        <MarkDownContent content={markdown}/>
        <LinkButton href={""}>Apply Now</LinkButton>
    </Container>
  )
}
