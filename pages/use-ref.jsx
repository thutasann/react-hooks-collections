import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import Heading from '../components/heading'

const UseRef = () => {

    const [ name, setName ] = useState('');
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    // -----------

    const [ name2, setName2 ] = useState('');
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name2;
    }, [name2]);

    return (
        <div>
            <Head>
                <title>UseRef | React Hooks Collections</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading heading={'Use Ref'} />


            <CopyBlock
                text="
                    const renderCount = useRef(0);
                    useEffect(() => {
                        renderCount.current = renderCount.current + 1;
                    });
                "
                language='javascript'
                wrapLines
                theme={dracula}
                codeBlock={true}
            />

            <input 
                value={name}
                type="text" 
                onChange={(e) => setName(e.target.value)}
                style={{
                    marginTop: "30px"
                }}
            />
            <div
                style={{ marginTop: "10px"}}
            >
                My Name is : {name}

                <p>I rendered {renderCount.current} times</p>
            </div>

            {/* ----- Second Usage ------- */}

            <Heading heading={'Second Usage'}/>

            <CopyBlock
                text="
                    const prevName = useRef('');

                    useEffect(() => {
                        prevName.current = name2;
                    }, [name2]);
                "
                language='javascript'
                wrapLines
                theme={dracula}
                codeBlock={true}
            />

            <input
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                style={{
                    marginTop: "30px"
                }}
            />

            <div
                style={{ marginTop: "10px" }}
            >
                My Name is {name2} <br />
                and it used to be {prevName.current}
            </div>
        </div>
    )
}

export default UseRef