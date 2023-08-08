let r = ['{"id":384,"login":"random.s","name":"Random Someone"}', '{"id":1233,"login":"pupkin.d","name":"Poupkine Vassily"}', '{"id":1674,"login":"bobrov.b","name":"Bobrov Bobr"}'];
let z= ['Random Someone', '{"id":1233,"login":"pupkin.d","name":"Poupkine Vassily"}'];

const name = (r) => {
    let l = []
    r.map((oper) => {
        if (oper[0] === '{'){
            l = [...l , JSON.parse(oper).name]
        } else {
            l = [oper]
        }
    })
    return l
}

let nl = name(z);
console.log(nl)



