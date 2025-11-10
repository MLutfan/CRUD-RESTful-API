# UTS Web Service Engineering
# Project: `UTS-WSE-230104040129`

Ini adalah proyek RESTful API yang dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah **Web Service Engineering (WSE)**.

API ini dibangun menggunakan **Node.js** dan **Express.js** dan menerapkan **7 Prinsip RESTful API**. Sesuai ketentuan, API ini tidak menggunakan database eksternal dan mengelola data *dummy* secara internal.

---

## 👨‍💻 Identitas Mahasiswa

* **Nama:** `Muhammad Lutfan`
* **NIM:** `230104040129`

## 🎬 Resource yang Dikelola

Berdasarkan digit akhir NIM (**9**), *resource* yang dikelola oleh API ini adalah **`movies`**.

* **Resource:** `movies`
* **Field Wajib:** `title`, `genre`, `year`

---

## 🚀 Cara Menjalankan Proyek

Pastikan Anda memiliki Node.js dan NPM terinstal di sistem Anda.

1.  **Clone repositori ini (jika diunggah) atau buka folder proyek.**

2.  **Instal semua *dependencies*:**
    ```bash
    npm install
    ```

3.  **Jalankan server (mode pengembangan):**
    Server akan berjalan menggunakan `nodemon` di `http://localhost:3000`.
    ```bash
    npm run dev
    ```

---

## 🗺️ Daftar Endpoint API

API ini mengimplementasikan 5 endpoint CRUD lengkap untuk *resource* `movies` dan 1 endpoint `info`.

| Method | Endpoint | Deskripsi | Status Sukses | Status Gagal |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/info` | Menampilkan informasi dan identitas service. | `200 OK` | - |
| `GET` | `/api/movies` | Mengambil seluruh daftar data *movies*. | `200 OK` | - |
| `GET` | `/api/movies/:id` | Mengambil data *movie* spesifik berdasarkan `id`. | `200 OK` | `404 Not Found` |
| `POST` | `/api/movies` | Membuat data *movie* baru. | `201 Created` | `400 Bad Request` |
| `PUT` | `/api/movies/:id` | Memperbarui data *movie* spesifik berdasarkan `id`. | `200 OK` | `400 Bad Request` / `404 Not Found` |
| `DELETE` | `/api/movies/:id` | Menghapus data *movie* spesifik berdasarkan `id`. | `200 OK` / `204 No Content` | `404 Not Found` |

---

## ✅ Fitur dan Implementasi

* **Struktur Modular:** Kode diorganisir dalam struktur `routes`, `controllers`, dan `data`.
* **Validasi Input:** Terdapat validasi untuk *field* wajib (seperti `title` dan `genre`) pada endpoint `POST` dan `PUT`.
* **Error Handling:** Menggunakan *status code* HTTP yang tepat (200, 201, 204, 400, 404) untuk menangani respons sukses dan gagal.
* **JSON Representation:** Semua respons dan *request body* menggunakan format JSON yang konsisten.