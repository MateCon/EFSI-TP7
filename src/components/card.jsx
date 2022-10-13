export default function Card(props) {
    console.log(props)

    return (
        <a href="#" className="text-center p-2 border-2 border-[#71a7ab] hover:bg-[#71a7ab] hover:cursor-pointer rounded-sm transition">
            <img className="w-full" src={props.thumbnail} alt="lavatorio" />
            <h3 className="text-lg font-bold pt-1 leading-tight">{props.title}</h3>
            <p className=" leading-tight">{props.description}</p>
        </a>
    )
}