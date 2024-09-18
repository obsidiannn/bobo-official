


import { Icon } from "@chakra-ui/react"

const BoboIcon = (props: {
    source: string
    size?: number,
    className?: string
}) => {
    return <img src={props.source} className={props.className}
        style={{
            width: props.size ?? 16,
            height: props.size ?? 16
        }} />
}

export default BoboIcon
