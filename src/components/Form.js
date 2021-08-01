const Form = ({ city, setCity, getWeather }) => {
    return(
        <form>
            <input type="text" name="city"value={city}  placeholder=" 都 市 名 " onChange={e => setCity(e.target.value)}/>
            <button type="submit" onClick={getWeather}>GetWeather</button>
        </form>
    );
};
export default Form;