


export default function Filter(props:any) {
    const status = ['alive', 'dead', 'unknown']
    const gender = ['female', 'male', 'genderless','unknown']
    const divStyle = {margin: '1rem'}
    const selectStyle = {padding: '5px', fontSize: 'medium', margin: '2px'}
    // console.log(props.characters)
    return (
        <div style={divStyle}>
            <select onChange={props.statusHandler} style={selectStyle} name="status" id="characterStatus">
                {status.map((item, index) => {
                    return (<option key={index} value={item}>{item}</option>);
                })}
            </select>
            <select onChange={props.genderHandler} style={selectStyle} name="gender" id="characterGender">
                {gender.map((item, index) => {
                    return (<option key={index} value={item}>{item}</option>);
                })}
            </select>
            <button onClick={props.resetHandler} name='reset'>Reset</button>
        </div>
    )
}