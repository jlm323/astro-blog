export default function SignInfo({signs}) {
    return (
        <div className="sign-info">
            <span>Dates: {signs.dates} </span><br/>
            <span>Symbol: {signs.symbol} </span><br/>
        </div>
    )
}