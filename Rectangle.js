let width = 0;
let height = 0;
function inputRectangle(){
    try {    
        width = parseFloat(prompt("Nhập chiều rộng:"));
        height = parseFloat(prompt("Nhập chiều dài:"));
        if(width <= 0 || height <= 0){
            throw new Error("Không được nhập số âm!!");
        }
        if(isNaN(width) || isNaN(height)){
            throw new Error("Không được nhập ký tự!!")
        }
    } catch (error) {
        console.log("Lỗi: " + error.message +"! Vui lòng nhập lại.");
        inputRectangle();
    } 
}
function calculateRectangle(){
    return width * height;
}
function displayRectangle(){
    console.log(`Diện tích hình chữ nhật có chiều rộng ${width} và chiều dài ${height} là: ${calculateRectangle()}`);
}


inputRectangle();
calculateRectangle();
displayRectangle();