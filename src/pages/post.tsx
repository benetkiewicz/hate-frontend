import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Markdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Post = () => {
    const {id} = useParams();

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        (async function () {
          try {
            const apiResponse = await fetch(`https://hate-frontend.azurewebsites.net/posts/${id}`, { headers: { method: "GET", "ApiKey": import.meta.env.VITE_API_KEY } });
            if (!apiResponse.ok) {
              throw new Error(`API returned: ${apiResponse.status}`);
            }
            const responseContent = await apiResponse.text();
            setMarkdown(responseContent);
          }
          catch (error) {
            setMarkdown(`Could not fetch blog post: ${error}`);
          }
        })();
    });

    return (<Markdown
        // eslint-disable-next-line react/no-children-prop
        children={markdown}
        components={{
          code(props) {
            // eslint-disable-next-line react/prop-types
            const {children, className, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={oneLight}
                ref={null}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      />);
}

export default Post;