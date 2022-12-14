import Head from 'next/head';
import React, { useState } from 'react'
import Heading from '../components/heading';
import styles from '../styles/Home.module.css'
import { CopyBlock,dracula } from "react-code-blocks";


const UseState = () => {

    const [ state, setState ] = useState({ count: 4, theme: 'blue '});
    const count = state.count;
    const theme = state.theme;

    const decrementCount = () => {
        setState(previousState => {
            return { ...previousState, count: previousState.count - 1 }
        })
    }

    const incrementCount = () => {
        setState(previousState => {
            return {
                ...previousState,
                count: previousState.count + 1,
            }
        })
    }

    return (
        <>
            <Head>
                <title>UseState | React Hooks Collections</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading heading={'Use State'}/>

            <CopyBlock
                text="
                const decrementCount = () => {
                    setState(previousState => {
                        return { ...previousState, count: previousState.count - 1 }
                    })
                }
                "
                language='javascript'
                wrapLines
                theme={dracula}
                codeBlock={true}
            />

            <div className={styles.container} style={{ marginTop: "40px"}}>
                <button onClick={decrementCount}>-</button>&nbsp;
                <span>{count}</span>&nbsp;
                <span>{theme}</span>&nbsp;
                <button onClick={incrementCount}>+</button>
            </div>
        </>
    )
}

export default UseState