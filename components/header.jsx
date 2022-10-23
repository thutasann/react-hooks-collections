import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {

    const router = useRouter();

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
            <Link href="/" className={router.pathname == "/" ? 'active' : ''}>Home</Link>
            <Link href="/use-state" className={router.pathname == "/use-state" ? 'active' : ''}>UseState</Link>
            <Link href="/use-effect" className={router.pathname == "/use-effect" ? 'active' : ''}>UseEffect</Link>
            <Link href="/use-memo" className={router.pathname == "/use-memo" ? 'active' : ''}>UseMemo</Link>
            <Link href="/use-ref" className={router.pathname == "/use-ref" ? 'active' : ''}>UseRef</Link>
            <Link href="/use-context" className={router.pathname == "/use-context" ? 'active' : ''}>UseContext</Link>
            <Link href="/use-reducer" className={router.pathname == "/use-reducer" ? 'active' : ''}>UseReducer</Link>
            <Link href="/use-callback" className={router.pathname == "/use-callback" ? 'active' : ''}>UseCallBack</Link>
            <Link href="/custom-hooks" className={router.pathname == "/custom-hooks" ? 'active' : ''}>CustomHooks</Link>
            <Link href="/use-layout-effect" className={router.pathname == "/use-layout-effect" ? 'active' : ''}>UseLayoutEffect</Link>
            <Link href="/use-transaction-hook" className={router.pathname == "/use-transaction-hook" ? 'active' : ''}>UseTransactionHook</Link>
            <Link href="/use-deferred-value-hook" className={router.pathname == "/use-deferred-value-hook" ? 'active' : ''}>UseDefferredValue</Link>
            <Link href="/use-impreative-handle" className={router.pathname == "/use-impreative-handle" ? 'active' : ''}>UseImpreativeHandle</Link>
        </div>
    )
}

export default Header