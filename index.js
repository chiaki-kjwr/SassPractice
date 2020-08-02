function callApi(){
  //APIを叩く処理
  //APIを叩いて、かえってきたデータ
  const res = window.fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res);
}
callApi();