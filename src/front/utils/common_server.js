require('babel-polyfill')

export const count_table_records = async (nameTable) => {

    let url_for_common = '/Ixtlan-php/src/DB/utilsDB/common.php'
    let data           = { 'goal': 'countTable', 'tableName': nameTable }
    let headers        = { 'Content-Type': 'application/json' }

    let result = await (await fetch(url_for_common, { 
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: headers 
    })).json()

    return result.countTable

}