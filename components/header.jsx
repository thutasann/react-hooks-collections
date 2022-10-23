import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: "30px",
                textDecoration: 'underline',
                marginBottom: "30px"
            }}
            className="header"
        >
            <Link href="/">Home</Link>
            <Link href="/use-state">UseState</Link>
            <Link href="/use-effect">UseEffect</Link>
            <Link href="/use-memo">UseMemo</Link>
            <Link href="/use-ref">UseRef</Link>
            <Link href="/use-context">UseContext</Link>
            <Link href="/use-reducer">UseReducer</Link>
            <Link href="/use-callback">UseCallBack</Link>
            <Link href="/custom-hooks">CustomHooks</Link>
            <Link href="/use-layout-effect">UseLayoutEffect</Link>
            <Link href="/use-transaction-hook">UseTransactionHook</Link>
            <Link href="/use-deferred-value-hook">UseDefferredValue</Link>
            <Link href="/use-impreative-handle">UseImpreativeHandle</Link>
        </div>
    )
}

export default Header