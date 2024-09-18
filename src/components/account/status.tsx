import { useAccount } from "wagmi"
import FormLine from "../form/form-line"

const AccountStatus = () => {
    const { isConnecting, isConnected } = useAccount()
    const renderStatus = () => {
        if (isConnecting) {
            return "Connecting"
        }
        if (isConnected) {
            return "Connected"
        }
        return "Disconnect"
    }
    return <FormLine label="Account Status" value={renderStatus()} />
}

export default AccountStatus