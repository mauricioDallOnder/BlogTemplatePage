import styles from "./Avatar.module.scss"

interface IIAvatarprops{
    src?: string;
    alt?: string;
    hasBorder?: boolean;
}


export const Avatar=({src,alt,hasBorder=true}:IIAvatarprops)=>{
return <img className={hasBorder? styles.avatarBorder:styles.avatar} src={src} alt={alt} />
}