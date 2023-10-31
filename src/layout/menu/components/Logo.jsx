// side-menu 顶部logo

import logo from '@/assets/react.svg'
// import { useSelector } from 'react-redux'
export default function Logo() {
  // const { isCollapse } = useSelector((state) => state.menu)

  return (
    <div className="logo">
      <img src={logo} alt="react-logo" style={{ width: '32px', height: '32px' }} />
      {/* {!isCollapse ? <h2 className="ml4">Admin</h2> : null} */}
    </div>
  )
}
