import win32print
import ctypes

def open_cash_drawer(printer_name):
    try:
        # Open the printer
        handle = win32print.OpenPrinter(printer_name)
        
        # Escape code for opening cash drawer
        ESC = b'\x1B'
        p = b'\x70'
        m = b'\x00'
        t1 = b'\x19'
        t2 = b'\xFA'
        drawer_open = ESC + p + m + t1 + t2

        try:
            # Start a print job
            job = win32print.StartDocPrinter(handle, 1, ("Cash Drawer Open", None, "RAW"))
            try:
                win32print.StartPagePrinter(handle)
                win32print.WritePrinter(handle, drawer_open)
                win32print.EndPagePrinter(handle)
            finally:
                win32print.EndDocPrinter(handle)
        finally:
            win32print.ClosePrinter(handle)

        print(f"Cash drawer open command sent to {printer_name}")

    except Exception as e:
        print(f"An error occurred: {str(e)}")

# Replace 'EPSON TM-T20II Receipt' with your actual printer name
printer_name = 'pos'
open_cash_drawer(printer_name)
