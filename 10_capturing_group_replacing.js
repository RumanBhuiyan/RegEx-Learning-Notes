// replacing 1280x720 by 1280 px by 720
let regex2 = /([0-9]+)x([0-9]+)/g;
let size = "1280x720";

console.log(size.replace(regex2, `$1 px by $2`));
// $1 means replace first group and $2 means second group
// (first_group)(second_group)(third_group) so create groups in your reges
