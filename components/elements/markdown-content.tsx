import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props{
    content: string;
}

export default function MarkDownContent({ content }:Props) {
  return (
    <div className='text-grey-800'>
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  )
}
