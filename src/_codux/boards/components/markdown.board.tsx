import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Markdown from 'markdown-to-jsx';
import '@portfolio/client/src/styles/util-classes.scss';


export default createBoard({
    name: 'Markdown',
    Board: () => <div className="markdown">
        
            <Markdown>
                this is a text for **markdown**
            </Markdown>
        </div>,
    isSnippet: true,
});
