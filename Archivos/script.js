function operaciones() {
    const campos = ['banco', 'proveedor', 'cheque', 'zaza', 'viatico'];  
    const esperados = {
        bancoc: 850000,
        bancoa:0,
        proveedorc:0,
        proveedora: 17700,
        chequec: 120000,
        chequea:0,
        zazac: 25000,
        zazaa:0,
        viaticoc:0,
        viaticoa: 70000
    };

    let puntaje=0;
    let acum_c=0;
    let acum_a=0;

    campos.forEach(campo => {
  
        const inp_c = document.getElementById(`${campo}_cargo`);
        const inp_a = document.getElementById(`${campo}_abono`);

        const vc = parseFloat(inp_c.value) || 0;
        const va = parseFloat(inp_a.value) || 0;

        inp_c.style.backgroundColor = (vc === esperados[campo + 'c']) ? 'green' : 'red';
        inp_a.style.backgroundColor = (va === esperados[campo + 'a']) ? 'green' : 'red';

        if ((vc == esperados[campo + 'c']) && (va == esperados[campo + 'a'])){
            puntaje++;
        }
        
        acum_c=acum_c+vc;
        acum_a=acum_a+va;

    });

    document.getElementById('total_cargo').value = acum_c.toFixed(2);
    document.getElementById('total_abono').value = acum_a.toFixed(2);
    document.getElementById('saldo_cargo').value = (acum_c-acum_a).toFixed(2);

    alert(`Puntaje: ${puntaje} de ${campos.length}`);
}

