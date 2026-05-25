let baseDatosConceptos = {
    "iva": {

        titulo: "Impuesto al Valor Agregado (IVA)",
        contenido: "<p>El Impuesto al Valor Agregado grava el valor de las transferencias locales o importaciones de bienes muebles, en todas sus etapas de comercialización y al valor de los servicios prestados.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Quién asume este pago?</strong> El gravamen es asumido por el consumidor final de dicho bien o servicio.</li><li><strong>¿Quién debe declararlo?</strong> Todos los agentes que intervienen en la cadena de comercialización están obligados a declarar y pagar el IVA generado.</li><li><strong>¿Existen excepciones?</strong> Sí, existen bienes y servicios con tarifa 0% (como salud, educación o transporte público) según las regulaciones tributarias.</li></ul><h3 class='titulo-tarjeta'>Productos Gravados con IVA</h3><p>Los productos gravados con IVA, son todos aquellos bienes o servicios a los que se le suma un porcentaje extra a su valor original (15% en Ecuador).</p><h4>Producto Gravados (Si Pagan IVA)</h4><ul><li>Tecnologia y Accesorios</li><li>Entrenimiento y servicios digitales</li><li>Ropa y productos procesados</li><li>Electrodomésticos y menaje de hogar</li></ul><h4>Productos con Tarifa 0% (No Pagan IVA)</h4><ul><li>Alimentos y bebidas no procesadas (productos frescos de la canasta básica).</li><li>Medicamentos de uso humano, equipos e instrumental médico.</li><li>Transporte público de personas.</li><li>Salud y educacion</li></ul>"
    },
    "base": {
        titulo: "Base Imponible",
        contenido: "<p>Es el valor total de los bienes que se transfieren o de los servicios que se prestan, calculado a base de sus precios de venta o de prestación del servicio, que incluyen impuestos, tasas por servicios y demás gastos legalmente imputables al precio.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>En términos simples:</strong> Es el monto financiero neto sobre el cual se calculará el porcentaje del IVA (sea 15% o 0%).</li><li><strong>¿Incluye descuentos?</strong> La base imponible se calcula <em>después</em> de aplicar cualquier descuento comercial permitido por la ley.</li></ul>"
    },
    "agente": {
        titulo: "Agente de Retención",
        contenido: "<p>Persona natural o jurídica que, por mandato de la ley o reglamento, se encuentra obligada a retener el impuesto al momento en que se produzca el pago o crédito en cuenta.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Cuál es su función?</strong> Actúan como un brazo recaudador del Estado. Retienen un porcentaje del pago que le hacen a su proveedor y lo entregan directamente a la administración tributaria.</li><li><strong>¿Están obligados a entregar un comprobante?</strong> Sí, obligatoriamente deben emitir un Comprobante de Retención para que el proveedor pueda justificar ese monto restado de su pago.</li></ul>"
    },
    "comprobantes": {
        titulo: "Comprobantes de Pago",
        contenido: "<p>Son los documentos que acreditan la transferencia de bienes o la prestación de servicios, o la realización de otras transacciones gravadas con tributos.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Para qué sirven?</strong> Sirven para sustentar costos, gastos y crédito tributario en las declaraciones formales de impuestos.</li><li><strong>Tipos comunes:</strong> Facturas, Notas de Venta, Liquidaciones de compra de bienes y prestación de servicios, Tiquetes de máquinas registradoras y boletos emitidos por empresas de espectáculos.</li></ul>"
    },
    "fisica": {
        titulo: "Factura Física",
        contenido: "<p>Es un comprobante de pago que se emite en formato de papel mediante imprentas autorizadas. Debe cumplir con ciertos requisitos legales e institucionales para que sea válida.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Siguen siendo válidas?</strong> Sí, pero su uso está siendo gradualmente reemplazado. Actualmente se autorizan principalmente por contingencia (cuando fallan los sistemas electrónicos).</li><li><strong>Requisitos indispensables:</strong> Deben llevar el RUC, autorización de imprenta, fecha de caducidad y desglose claro de los montos imponibles.</li></ul>"
    },
    "electronica": {
        titulo: "Factura Electrónica",
        contenido: "<p>Es un documento digital legalmente válido que respalda las operaciones comerciales y se emite de acuerdo a los estándares establecidos por la administración tributaria (SRI en el caso de Ecuador).</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Tiene la misma validez que la física?</strong> Tiene exactamente la misma validez tributaria y legal que una factura en papel.</li><li><strong>¿Cómo se garantiza su seguridad?</strong> Se valida mediante una firma electrónica encriptada y un código de autorización único generado por la entidad de control.</li><li><strong>Beneficios:</strong> Ahorro de papel, envío inmediato por correo, almacenamiento seguro y agilidad en las declaraciones.</li></ul>"
    }
};

const productos = [
    { id: 1, nombre: "Arroz ",       categoria: "Alimentos básicos",     icono: "🌾", iva: 0,    base: "Art. 55 LRTI - Bienes de primera necesidad",          descripcion: "Alimento de la canasta básica familiar ." },
    { id: 2, nombre: "Pan",       categoria: "Alimentos básicos",     icono: "🌾", iva: 0,    base: "Art. 55 LRTI - Bienes de primera necesidad",          descripcion: "Alimento de la canasta básica familiar ." },
    { id: 3, nombre: "Leche",       categoria: "Alimentos básicos",     icono: "🌾", iva: 0,    base: "Art. 55 LRTI - Bienes de primera necesidad",          descripcion: "Alimento de la canasta básica familiar ." },
    { id: 4, nombre: "Ibuprofeno",             categoria: "Salud",                 icono: "💊", iva: 0,    base: "Art. 55 LRTI - Fármacos y medicamentos",              descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 4, nombre: "Pareacetamol",             categoria: "Salud",                 icono: "💊", iva: 0,    base: "Art. 55 LRTI - Fármacos y medicamentos",              descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 4, nombre: "levotiroxina",             categoria: "Salud",                 icono: "💊", iva: 0,    base: "Art. 55 LRTI - Fármacos y medicamentos",              descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 5, nombre: "Servicios médicos",        categoria: "Salud",                 icono: "🏥", iva: 0,    base: "Art. 56 LRTI - Servicios de salud",                   descripcion: "Prestaciones médicas, odontológicas y de diagnóstico clínico están gravadas con tarifa 0% de IVA." }
];

let productoSeleccionado = null;

function ocultarSecciones() {
    document.getElementById("sec-inicio").classList.remove("activa");
    document.getElementById("sec-simulador").classList.remove("activa");
    document.getElementById("sec-tabla").classList.remove("activa");
    document.getElementById("sec-soporte").classList.remove("activa");
    document.getElementById("sec-login").classList.remove("activa");
}

function mostrarSeccion(idSeccion, elementoBoton) {
    ocultarSecciones();
    document.getElementById(idSeccion).classList.add("activa");

    let enlaces = document.querySelectorAll(".barra-navegacion ul li a");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].classList.remove("active");
    }

    if (elementoBoton) {
        elementoBoton.classList.add("active");
        let indicador = document.getElementById("indicadorNeon");
        indicador.style.width = elementoBoton.offsetWidth + "px";
        indicador.style.height = elementoBoton.offsetHeight + "px";
        indicador.style.left = elementoBoton.offsetLeft + "px";
        indicador.style.top = elementoBoton.offsetTop + "px";
    }
}

function abrirModalInformacion(llaveConcepto) {
    let datos = baseDatosConceptos[llaveConcepto];
    if (datos) {
        document.getElementById("tituloModal").textContent = datos.titulo;
        document.getElementById("contenidoModal").innerHTML = datos.contenido;
        document.getElementById("modalInformacion").classList.add("visible");
    }
}

function cerrarModalInformacion() {
    document.getElementById("modalInformacion").classList.remove("visible");
}

function ocultarModulosSimulador() {
    document.getElementById("formFactura").classList.remove("activa-modulo");
    document.getElementById("formRetencion").classList.remove("activa-modulo");
    document.getElementById("formNota").classList.remove("activa-modulo");

    document.getElementById("btnModFactura").classList.remove("activo");
    document.getElementById("btnModRetencion").classList.remove("activo");
    document.getElementById("btnModNota").classList.remove("activo");
}

function mostrarModuloSimulador(idModulo, elementoBoton) {
    ocultarModulosSimulador();
    document.getElementById(idModulo).classList.add("activa-modulo");
    elementoBoton.classList.add("activo");
}

window.onload = function () {
    let botonInicio = document.getElementById("btnInicio");
    mostrarSeccion("sec-inicio", botonInicio);
}

function recuperarTxtAFloat(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = parseFloat(componente.value);
    return valor;
}

function mostrarEnSpan(idSpan, valorTexto) {
    document.getElementById(idSpan).textContent = valorTexto;
}

function calcularFactura() {
    let subtotal = recuperarTxtAFloat("txtSubtotal");
    let porcentajeDescuento = recuperarTxtAFloat("txtDescuento");
    let tasaIva = recuperarTxtAFloat("selIva");

    if (isNaN(porcentajeDescuento)) {
        porcentajeDescuento = 0;
    }

    if (isNaN(subtotal) || subtotal <= 0) {
        alert("Por favor, ingresa un subtotal válido mayor a 0.");
        return;
    }

    let montoDescuento = subtotal * (porcentajeDescuento / 100);
    let subtotalNeto = subtotal - montoDescuento;
    let ivaCalculado = subtotalNeto * tasaIva;
    let totalFactura = subtotalNeto + ivaCalculado;

    mostrarEnSpan("lblFacturaSubtotal", subtotalNeto.toFixed(2));
    mostrarEnSpan("lblFacturaDescuento", montoDescuento.toFixed(2));
    mostrarEnSpan("lblFacturaIva", ivaCalculado.toFixed(2));
    mostrarEnSpan("lblFacturaTotal", totalFactura.toFixed(2));

    document.getElementById("resultadoFactura").style.display = "block";
}

function calcularRetencion() {
    let montoBase = recuperarTxtAFloat("txtMontoBase");
    let tasaRenta = recuperarTxtAFloat("selRenta");
    let tasaIvaRet = recuperarTxtAFloat("selIvaRet");

    if (isNaN(montoBase) || montoBase <= 0) {
        alert("Por favor, ingresa un monto base válido mayor a 0.");
        return;
    }

    let retencionRenta = montoBase * tasaRenta;
    let ivaBaseFactura = montoBase * 0.15;
    let retencionIva = ivaBaseFactura * tasaIvaRet;
    let totalRetenido = retencionRenta + retencionIva;
    let netoAPagar = (montoBase + ivaBaseFactura) - totalRetenido;

    mostrarEnSpan("lblRetencionRenta", retencionRenta.toFixed(2));
    mostrarEnSpan("lblRetencionIva", retencionIva.toFixed(2));
    mostrarEnSpan("lblRetencionTotal", totalRetenido.toFixed(2));
    mostrarEnSpan("lblRetencionNeto", netoAPagar.toFixed(2));

    document.getElementById("resultadoRetencion").style.display = "block";
}

function calcularNota() {
    let valorOriginal = recuperarTxtAFloat("txtValorOriginal");
    let valorModificar = recuperarTxtAFloat("txtValorModificar");

    if (isNaN(valorOriginal) || valorOriginal <= 0 || isNaN(valorModificar) || valorModificar <= 0) {
        alert("Por favor, ingresa valores válidos mayores a 0.");
        return;
    }

    if (valorModificar > valorOriginal) {
        alert("El monto a modificar no puede ser mayor al valor original de la factura.");
        return;
    }

    let nuevoTotal = valorOriginal - valorModificar;

    mostrarEnSpan("lblNotaAjuste", valorModificar.toFixed(2));
    mostrarEnSpan("lblNotaNuevoTotal", nuevoTotal.toFixed(2));

    document.getElementById("resultadoNota").style.display = "block";
}

function renderizarProductos(lista) {
    const ul = document.getElementById('listaProductos');
    ul.innerHTML = '';
    if (lista.length === 0) {
        ul.innerHTML = '<li style="color:#475569;text-align:center;padding:20px;font-size:0.9rem;">Sin resultados</li>';
        return;
    }
    lista.forEach(p => {
        const li = document.createElement('li');
        li.className = 'item-producto' + (productoSeleccionado?.id === p.id ? ' seleccionado' : '');
        li.onclick = () => seleccionarProducto(p);
        li.innerHTML = `
            <span class="producto-icono">${p.icono}</span>
            <div class="producto-info">
                <div class="producto-nombre">${p.nombre}</div>
                <div class="producto-categoria">${p.categoria}</div>
            </div>
            <span class="badge-lista ${p.iva === 0 ? 'badge-0' : 'badge-15'}">${p.iva === 0 ? 'IVA 0%' : 'IVA 15%'}</span>
        `;
        ul.appendChild(li);
    });
}

function filtrarProductos() {
    const query = document.getElementById('txtBusquedaProducto').value.toLowerCase();
    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(query) ||
        p.categoria.toLowerCase().includes(query)
    );
    renderizarProductos(filtrados);
}

function seleccionarProducto(p) {
    productoSeleccionado = p;
    renderizarProductos(productos.filter(x =>
        document.getElementById('txtBusquedaProducto').value === '' ? true :
        x.nombre.toLowerCase().includes(document.getElementById('txtBusquedaProducto').value.toLowerCase())
    ));

    document.getElementById('panelVacio').style.display   = 'none';
    document.getElementById('panelDetalle').style.display = 'flex';

    const esExento = p.iva === 0;
    const badge = document.getElementById('detalleBadge');
    badge.textContent   = esExento ? 'IVA 0% — Exento' : 'IVA 15% — Tarifa General';
    badge.className     = 'badge-iva ' + (esExento ? 'badge-0' : 'badge-15');

    document.getElementById('detalleNombre').textContent      = p.nombre;
    document.getElementById('detalleCategoria').textContent   = p.categoria;
    document.getElementById('detalleTarifa').textContent      = esExento ? '0%' : '15%';
    document.getElementById('detalleBase').textContent        = p.base;
    document.getElementById('detalleDescripcion').textContent = p.descripcion;
    document.getElementById('simLabelIva').textContent        = `IVA (${esExento ? '0' : '15'}%)`;

    document.getElementById('detallePrecio').value   = '';
    document.getElementById('detalleCantidad').value = '1';
    actualizarSimulacion(0, 1, p.iva);
}

function simularDesdeDetalle() {
    if (!productoSeleccionado) return;
    const precio   = parseFloat(document.getElementById('detallePrecio').value)   || 0;
    const cantidad = parseFloat(document.getElementById('detalleCantidad').value) || 1;
    actualizarSimulacion(precio, cantidad, productoSeleccionado.iva);
}

function actualizarSimulacion(precio, cantidad, tasaIva) {
    const subtotal = precio * cantidad;
    const iva      = subtotal * tasaIva;
    const total    = subtotal + iva;
    document.getElementById('simSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('simIva').textContent      = '$' + iva.toFixed(2);
    document.getElementById('simTotal').textContent    = '$' + total.toFixed(2);
}

// Inicializar lista al cargar
document.addEventListener('DOMContentLoaded', () => renderizarProductos(productos));