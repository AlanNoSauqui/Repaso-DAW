function Individual(props){
    const {contenido} = props;

    return (
        <>
            <div className="row" style={{background: 'linear-gradient(90deg, rgba(58,74,180,1) 0%, rgba(29,97,253,1) 27%, rgba(49,66,253,1) 60%, rgba(93,76,230,1) 96%, rgba(121,69,252,1) 100%)'}}>
                <div className="col s7 push-s5" ><span style={{color: 'white'}} className="flow-text">{contenido?.content}</span></div>
                <div className="col s5 pull-s7"><span style={{color: 'white'}} className="flow-text">{contenido?.title}</span></div>
            </div>
        </>
    );
}

export default Individual;