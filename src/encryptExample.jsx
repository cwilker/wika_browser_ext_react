function encrypt(o, salt) {
  o = JSON.stringify(o).split('');
  for(var i = 0, l = o.length; i < l; i++)
      if(o[i] == '{')
          o[i] = '}';
      else if(o[i] == '}')
          o[i] = '{';
  return encodeURI(salt + o.join(''));
}

function decrypt(o, salt) {
  o = decodeURI(o);
  if(salt && o.indexOf(salt) != 0)
      throw new Error('object cannot be decrypted');
  o = o.substring(salt.length).split('');
  for(var i = 0, l = o.length; i < l; i++)
      if(o[i] == '{')
          o[i] = '}';
      else if(o[i] == '}')
          o[i] = '{';
  return JSON.parse(o.join(''));
}

var obj = {
  key : 'value',
  3 : 1
};
var salt = "some string here";
var encrypted = encrypt(obj, salt);
var decrypted = decrypt(encripted, salt);