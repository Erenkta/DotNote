export default function Input(props) { //tekrardan hatırlatma default ise {} kullanmana gerek yok 
    const {label,id,type,error,onChange} = props
  return ( //(2)
    <div className="mb-3">
    <label className="form-label" htmlFor={id}>
       {label}
    </label>
    <input
      className={error ?"form-control is-invalid" : "form-control"}
      id={id}
      type={type}
      onChange={onChange}
    />
    {/* input'lar event'i otomatik olarak verir bunu ister  ek yukarıdaki gibi kullanabiliriz */}
    <div className="invalid-feedback">
      {error}
    </div>
  </div>
  )
}
