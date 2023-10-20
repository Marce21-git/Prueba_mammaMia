export const Listsummary = ({ item }) => {

    const { id = '0', name = 'text', price = '000', cantidad = 0, img ='' } = item

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <div className="flex-fill">
                    <img src={img} className="ratio ratio-16x9 float-start bg-secondary-subtle" style={{width:'56px'}}></img>
                    <span className="align-middle ps-2">{name}</span>
                </div>
                <div>
                    <span className="align-middle pe-2 text-success">$ {price}</span>
                    <button type="button" className="btn btn-danger">-</button>
                    <span className="align-middle px-2">{cantidad}</span>
                    <button type="button" className="btn btn-primary">+</button>
                </div>
            </div>
        </li>
    )
}