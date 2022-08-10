// export const Button1 = ()=> {
//     return <button className="bg-yellow-500 py-3 px-5 m-1 text-white rounded-full"> Add to Cart</button>;
// };
// export const Button2 = ()=> {
//     return <button className="bg-blue-500 py-3 px-5 m-1 text-white rounded-full" > login</button>;
// };
// export const Button3 = ()=> {
//     return <button className="bg-green-500 p-3 m-1" > Register</button>;
// };

function Button({label}){
    return <Button className= "border-2 border-orange-500 py-5 rounded-full text-orange-500 hover:bg-green-500 hover:text-white-500">{label}</Button> ;
}
export default Button;