import { FaCircleNotch } from 'react-icons/fa'

export default function Preloader() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '50vh' }}>
      <FaCircleNotch className="spin" size={32} aria-label="Loading" />
    </div>
  )
}
