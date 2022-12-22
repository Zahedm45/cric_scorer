import {Image} from "primereact/image";

function Picture(props) {
    return(
        <Image className="image"
             src={props.image.src}
             width={props.image.width}
             height={props.image.height}
             alt={props.image.name}
        />

    );
}
export default Picture;