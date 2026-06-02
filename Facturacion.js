let baseDatosConceptos = {
    "iva": {
        titulo: "Impuesto al Valor Agregado (IVA)",
        contenido: "<p>El Impuesto al Valor Agregado grava el valor de las transferencias locales o importaciones de bienes muebles, en todas sus etapas de comercialización y al valor de los servicios prestados.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>¿Quién asume este pago?</strong> El gravamen es asumido por el consumidor final de dicho bien o servicio.</li><li><strong>¿Quién debe declararlo?</strong> Todos los agentes que intervienen en la cadena de comercialización están obligados a declarar y pagar el IVA generado.</li><li><strong>¿Existen excepciones?</strong> Sí, existen bienes y servicios con tarifa 0% (como salud, educación o transporte público) según las regulaciones tributarias.</li></ul><h3 class='titulo-tarjeta'>Productos Gravados con IVA</h3><p>Los productos gravados con IVA, son todos aquellos bienes o servicios a los que se le suma un porcentaje extra a su valor original (15% en Ecuador).</p><h4>Producto Gravados (Si Pagan IVA)</h4><ul><li>Tecnologia y Accesorios</li><li>Entrenimiento y servicios digitales</li><li>Ropa y productos procesados</li><li>Electrodomésticos y menaje de hogar</li></ul><h4>Productos con Tarifa 0% (No Pagan IVA)</h4><ul><li>Alimentos y bebidas no procesadas (productos frescos de la canasta básica).</li><li>Medicamentos de uso humano, equipos e instrumental médico.</li><li>Transporte público de personas.</li><li>Salud y educacion</li></ul>"
    },
    "base": {
        titulo: "Base Imponible",
        contenido: "<p>Es el valor total de los bienes que se transfieren o de los servicios que se prestan, calculado a base de sus precios de venta o de prestación del servicio, que incluyen impuestos, tasas por servicios y demás gastos legalmente imputables al precio.</p><h4>Dudas Frecuentes resueltas:</h4><ul><li><strong>En términos simples:</strong> Es el monto financiero neto sobre el cual se calculará el porcentaje del IVA (sea 15% o 0%).</li><li><strong>¿Incluye descuentos?</strong> La base imponible se calcula <em>después</em> de aplicar cualquier descuento comercial permitido por la ley.</li></ul><h3 class='titulo-tarjeta'>Subtotal</h3><p>El subtotal es el valor total de los bienes o servicios antes de aplicar cualquier descuento, impuesto o recargo.</p><h3 class='titulo-tarjeta'>Cálculo</h3><ul><li><strong>Fórmula:</strong> Base Imponible = Subtotal - Descuentos</li></ul> "
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
    { id: 1, nombre: "Arroz", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 2, nombre: "Pan", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 3, nombre: "Leche", categoria: "Alimentos básicos", icono: "·", iva: 0, descripcion: "Alimento de la canasta básica familiar." },
    { id: 5, nombre: "Ibuprofeno", categoria: "Salud", icono: "·", iva: 0, descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 6, nombre: "Paracetamol", categoria: "Salud", icono: "·", iva: 0, descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 7, nombre: "Levotiroxina", categoria: "Salud", icono: "·", iva: 0, descripcion: "Medicamento de uso humano exento de IVA para garantizar el acceso a la salud." },
    { id: 8, nombre: "Servicios médicos", categoria: "Salud", icono: "·", iva: 0, descripcion: "Prestaciones médicas, odontológicas y de diagnóstico clínico están gravadas con tarifa 0% de IVA." },
    { id: 9, nombre: "Atún y sardinas", categoria: "Alimentos básicos", icono: "·", iva: 0.15, descripcion: "Conservas de pescado para consumo humano." }
];

let productoSeleccionado = null;

function ocultarSecciones() {
    document.getElementById("sec-inicio").classList.remove("activa");
    document.getElementById("sec-simulador").classList.remove("activa");
    document.getElementById("sec-tabla").classList.remove("activa");
    document.getElementById("sec-calendario").classList.remove("activa");
    document.getElementById("sec-fundamentos").classList.remove("activa");
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
    document.getElementById("formDesglose").classList.remove("activa-modulo");
    document.getElementById("formRetencion").classList.remove("activa-modulo");
    document.getElementById("formNota").classList.remove("activa-modulo");
    document.getElementById("formIntereses").classList.remove("activa-modulo");

    document.getElementById("btnModFactura").classList.remove("activo");
    document.getElementById("btnModDesglose").classList.remove("activo");
    document.getElementById("btnModRetencion").classList.remove("activo");
    document.getElementById("btnModNota").classList.remove("activo");
    document.getElementById("btnPagoIntereses").classList.remove("activo");
}

function mostrarModuloSimulador(idModulo, elementoBoton) {
    ocultarModulosSimulador();
    document.getElementById(idModulo).classList.add("activa-modulo");
    elementoBoton.classList.add("activo");
}

window.onload = function () {
    let botonInicio = document.getElementById("btnInicio");
    mostrarSeccion("sec-inicio", botonInicio);
    pintarHistorial();
}

function recuperarTxtAFloat(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = parseFloat(componente.value);
    return valor;
}

function mostrarEnSpan(idSpan, valorTexto) {
    document.getElementById(idSpan).textContent = valorTexto;
}

function guardarHistorial(tipo, base, impuesto, total) {
    let historialTexto = localStorage.getItem("datosFacturacion");
    let lista = [];
    if (historialTexto) {
        lista = JSON.parse(historialTexto);
    }

    let nuevoRegistro = {
        tipoCalculo: tipo,
        valorBase: base,
        valorImpuesto: impuesto,
        valorTotal: total
    };

    lista.push(nuevoRegistro);
    localStorage.setItem("datosFacturacion", JSON.stringify(lista));
    pintarHistorial();
}

function pintarHistorial() {
    let historialTexto = localStorage.getItem("datosFacturacion");
    let lista = [];
    if (historialTexto) {
        lista = JSON.parse(historialTexto);
    }

    let cuerpoTabla = document.getElementById("cuerpoHistorial");
    let filasHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let registro = lista[i];
        filasHTML += "<tr>";
        filasHTML += "<td>" + registro.tipoCalculo + "</td>";
        filasHTML += "<td>$" + parseFloat(registro.valorBase).toFixed(2) + "</td>";
        filasHTML += "<td>$" + parseFloat(registro.valorImpuesto).toFixed(2) + "</td>";
        filasHTML += "<td>$" + parseFloat(registro.valorTotal).toFixed(2) + "</td>";
        filasHTML += "</tr>";
    }

    cuerpoTabla.innerHTML = filasHTML;
}

function limpiarHistorial() {
    localStorage.removeItem("datosFacturacion");
    pintarHistorial();
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
    guardarHistorial("Factura Directa", subtotalNeto.toFixed(2), ivaCalculado.toFixed(2), totalFactura.toFixed(2));
}

function calcularDesglose() {
    let total = recuperarTxtAFloat("txtTotalDesglose");
    let tasaIva = recuperarTxtAFloat("selIvaDesglose");

    if (isNaN(total) || total <= 0) {
        alert("Por favor, ingresa un total válido mayor a 0.");
        return;
    }

    let subtotal = total / (1 + tasaIva);
    let ivaExtraido = total - subtotal;

    mostrarEnSpan("lblDesgloseSubtotal", subtotal.toFixed(2));
    mostrarEnSpan("lblDesgloseIva", ivaExtraido.toFixed(2));
    mostrarEnSpan("lblDesgloseTotal", total.toFixed(2));

    document.getElementById("resultadoDesglose").style.display = "block";
    guardarHistorial("Desglose IVA", subtotal.toFixed(2), ivaExtraido.toFixed(2), total.toFixed(2));
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
    guardarHistorial("Retenciones", montoBase.toFixed(2), totalRetenido.toFixed(2), netoAPagar.toFixed(2));
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
    guardarHistorial("Nota Crédito", valorOriginal.toFixed(2), valorModificar.toFixed(2), nuevoTotal.toFixed(2));
}

function renderizarProductos(productosRender) {
    let lista = document.getElementById("listaProductos");
    lista.innerHTML = "";
    for (let i = 0; i < productosRender.length; i++) {
        let producto = productosRender[i];
        let li = document.createElement("li");
        li.className = "item-producto";
        li.onclick = function () {
            seleccionarProducto(producto);
        }
        li.innerHTML = `<span class = "producto-icono">${producto.icono}</span>
                        <div class = "producto-info">
                            <div class = "producto-nombre">${producto.nombre}</div>
                            <div class = "producto-categoria">${producto.categoria}</div>
                        </div>`;
        lista.appendChild(li);
    }
}

function buscarProducto() {
    let buscar = document.getElementById("txtBusquedaProducto").value.toLowerCase();
    let encontrados = [];

    for (let i = 0; i < productos.length; i++) {
        let nombre = productos[i].nombre.toLowerCase();
        let categoria = productos[i].categoria.toLowerCase();
        if (nombre.includes(buscar) || categoria.includes(buscar)) {
            encontrados.push(productos[i]);
        }
    }
    renderizarProductos(encontrados);
}

function seleccionarProducto(producto) {
    productoSeleccionado = producto;
    renderizarProductos(productos);

    document.getElementById("panelVacio").style.display = "none";
    document.getElementById("panelDetalle").style.display = "flex";

    document.getElementById("detalleNombre").textContent = producto.nombre;
    document.getElementById("detalleCategoria").textContent = producto.categoria;
    document.getElementById("detalleDescripcion").textContent = producto.descripcion;

    let impuestoAplicado = document.getElementById("detalleBadge");
    if (producto.iva === 0) {
        impuestoAplicado.textContent = "IVA = 0% - Exento";
        impuestoAplicado.className = "badge-iva badge-0";
        document.getElementById("detalleTarifa").textContent = "0%";
        document.getElementById("simLabelIva").textContent = "IVA (0%)";
    } else {
        impuestoAplicado.textContent = "IVA = 15% - Tarifa General";
        impuestoAplicado.className = "badge-iva badge-15";
        document.getElementById("detalleTarifa").textContent = "15%";
        document.getElementById("simLabelIva").textContent = "IVA (15%)";
    }

    document.getElementById("detallePrecio").value = "";
    document.getElementById("detalleCantidad").value = "1";

    actualizarSimulacion(0, 1, producto.iva);
}

function actualizarSimulacion(precio, cantidad, tasaIva) {
    let subtotal = precio * cantidad;
    let iva = subtotal * tasaIva;
    let total = subtotal + iva;

    document.getElementById("simSubtotal").textContent = '$' + subtotal.toFixed(2);
    document.getElementById("simIva").textContent = '$' + iva.toFixed(2);
    document.getElementById("simTotal").textContent = '$' + total.toFixed(2);
}

function simularDetallesDelProducto() {
    if (productoSeleccionado == null) {
        return;
    }
    let precio = parseFloat(document.getElementById("detallePrecio").value);
    let cantidad = parseFloat(document.getElementById("detalleCantidad").value);

    if (isNaN(precio)) { precio = 0; }
    if (isNaN(cantidad)) { cantidad = 1; }

    actualizarSimulacion(precio, cantidad, productoSeleccionado.iva)
}

document.addEventListener('DOMContentLoaded', function () {
    renderizarProductos(productos);
});

function consultarCalendario() {
    let digito = document.getElementById("txtDigito");
    let digitoTexto = digito.value;

    if (digitoTexto === "" || isNaN(digitoTexto) || digitoTexto < 0 || digitoTexto > 9) {
        alert("Por favor, ingrese un dígito válido.");
        return;
    }

    let cmpDigito = parseInt(digitoTexto);
    let fechaMaxima = 0;

    if (cmpDigito === 1) fechaMaxima = 10;
    else if (cmpDigito === 2) fechaMaxima = 12;
    else if (cmpDigito === 3) fechaMaxima = 14;
    else if (cmpDigito === 4) fechaMaxima = 16;
    else if (cmpDigito === 5) fechaMaxima = 18;
    else if (cmpDigito === 6) fechaMaxima = 20;
    else if (cmpDigito === 7) fechaMaxima = 22;
    else if (cmpDigito === 8) fechaMaxima = 24;
    else if (cmpDigito === 9) fechaMaxima = 26;
    else if (cmpDigito === 0) fechaMaxima = 28;

    mostrarEnSpan("lblDigito", cmpDigito);
    mostrarEnSpan("lblFechaMensual", fechaMaxima);
    mostrarEnSpan("lblFechaSemestral", fechaMaxima);

    document.getElementById("resultadoCalendario").style.display = "block";
}