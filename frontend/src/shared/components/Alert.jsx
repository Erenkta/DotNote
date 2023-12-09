export function Alert(props){
    const {children,styleType,center} = props
    return(
        <div className={`alert alert-${styleType || 'success'} ${center ? 'text-center' : ''}`}>{children}</div>
    )// Temel mantık eğer style verilmediyse 'success' verildiyse de o style geçerli
    
}