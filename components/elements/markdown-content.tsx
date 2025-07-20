import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

const proseClass = `
     text-grey-80
     prose md:prose-lg 
     prose-li:marker:text-black 
     prose-blockquote:rounded-sm 
     prose-blockquote:p-2 
     prose-blockquote:bg-gray-100 
     prose-img:mx-auto 
     max-md:prose-img:max-h-[300px] 
     lg:prose-lg 
     prose-img:rounded-md 
     prose-a:text-primary 
     max-w-none
     prose-table:border-2
     prose-table:border-solid
     prose-table:text-center
     prose-td:border
     prose-th:text-xl
  
`

export default function MarkDownContent({ content }: Props) {
  return (
    <div className={proseClass}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  )
}
