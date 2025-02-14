import pyperclip
import pandas as pd
from bs4 import BeautifulSoup
from tqdm import tqdm  # Para la barra de progreso

def html_to_tsv():
    # Leer HTML desde el portapapeles
    html_data = pyperclip.paste()
    
    # Parsear el HTML con BeautifulSoup
    soup = BeautifulSoup(html_data, "lxml")

    # Buscar la tabla
    table = soup.find("table")
    if not table:
        print("⚠ No se encontró ninguna tabla en el HTML copiado.")
        return

    # Extraer filas de la tabla
    rows = table.find_all("tr")

    # Inicializar lista de datos
    data = []
    
    print(f"🔍 Filas detectadas en la tabla: {len(rows)}")

    # Procesar cada fila con una barra de progreso
    for row in tqdm(rows, desc="Procesando filas", unit="fila"):
        cells = row.find_all(["th", "td"])  # Tomar tanto encabezados como datos
        data.append([cell.get_text(strip=True) for cell in cells])

    # Convertir a DataFrame
    df = pd.DataFrame(data)

    # Convertir a formato TSV
    tsv_text = df.to_csv(sep="\t", index=False, header=False)

    # Copiar al portapapeles
    pyperclip.copy(tsv_text)

    print(f"✅ Conversión completada: {len(rows)} filas procesadas. La tabla está en el portapapeles.")

# Ejecutar la función
html_to_tsv()

