import MarkDownContent from "@/components/elements/markdown-content";

export default function ContentSection({ content }:{ content: string}) {
  return (
        <MarkDownContent content={content}/>
    
  )
}
