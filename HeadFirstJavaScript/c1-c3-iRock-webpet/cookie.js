function writeCookie(name, value, days) {
  // By default, there is no expiration so the cookie is temporary
  var expires = "";

  // Specifying a number of days makes the cookie persistent
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  // Set the cookie to the name, value, and expiration date
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  // Find the specified cookie and return its value
  var searchName = name + "=";
  var cookies = document.cookie.split(';');
  // cookie里每一条记录都由分号间隔
  for(var i=0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ') //分割后，每一条信息的开头都是空格
      c = c.substring(1, c.length); //生成每一条信息
    if (c.indexOf(searchName) == 0) //如果是以name开头的信息
      return c.substring(searchName.length, c.length); //那就生成name的值
  }
  return null; // ????
}

function eraseCookie(name) {
  // Erase the specified cookie
  writeCookie(name, "", -1);
  // 把这条信息的值设置为空，并且与一秒前已经过期
}
