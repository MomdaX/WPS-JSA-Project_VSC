// WPS JSA 代码编辑器
// 在此编写您的 JSA 代码，点击 📤 发送到WPS 运行

function __main__() {
  // 九九乘法表
  const data = [];
  for (let i = 1; i <= 9; i++) {
    const row = [];
    for (let j = 1; j <= 9; j++) {
      row.push(j <= i ? i + '×' + j + '=' + (i * j) : '');
    }
    data.push(row);
  }
  Range('A1:I9').offset(10, 10).Value2 = data;
}