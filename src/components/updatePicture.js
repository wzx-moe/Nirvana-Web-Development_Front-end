
export default function UpdatePicture(props){
    return(
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                        
                <h1 class="h2">{props.name}</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Upload</button>
                        <button type="button" class="btn btn-sm btn-outline-danger">Confirm</button>
                    </div>
                </div>
            </div>
            <div>鬼知道这是什么但我不想写css</div>
        </main>
    )
}
