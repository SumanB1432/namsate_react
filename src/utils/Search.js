export function Search(filter,allRes){
    filter = filter.toLowerCase();
    console.log(filter)
   let data = allRes.filter((item)=>item?.data?.name?.toLowerCase().indexOf(filter)!=-1)

   return data;

}