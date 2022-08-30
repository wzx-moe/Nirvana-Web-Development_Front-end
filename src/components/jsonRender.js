export default function JsonRender(props){
    const loop = (arr) => (
        arr.map(item => {
            if(item.children){
                return <div {...item.attr} >{loop(item.children)}</div>
            }
            const ComponentInfo = props.ComponentList[item.name]
            return <ComponentInfo {...item.attr} />
        })
    );

    return(
        <div id="json-render">
            {loop(props.InputJson)}
        </div>
    )
}
