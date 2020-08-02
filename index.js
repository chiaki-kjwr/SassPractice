async function callApi(){
  //APIを叩く処理
  //APIを叩いて、かえってきたデータ
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}
callApi();