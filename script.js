/* ==========================================================================
  EksploreKepri — Panel Admin
  Front-end single page application (vanilla JS).

  1. Icons
  2. Mock Data
  3. Utilities
  4. Template Helpers
  5. Navigation
  6. Auth
  7. Toast
  8. Forms & Views
  9. Actions
  10. Initialization
   ========================================================================== */

/* 1. ICONS
   ========================================================================== */

const ICONS = {
  dashboard:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  paket:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  jadwal:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
  transport:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="10" rx="2"/><path d="M3 12h18M7 16v3M17 16v3"/></svg>',
  pelanggan:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="18" cy="9" r="2.3"/><path d="M15.5 14c2.8.2 5 2.3 5 5.4"/></svg>',
  pemesanan:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l4 4v16H6z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  pembayaran:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>',
  laporan:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  profil:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>',
};

/* 2. MOCK DATA
   ========================================================================== */

let admin = {
  nama: 'Admin Kepri',
  username: 'adminkepri',
  email: 'admin@eksplorekepri.com',
  telp: '0812-0000-0099',
  id: 'ADM-01',
};

let pakets = [
  {
    id: 'PKT-01',
    nama: 'Wisata Penyengat',
    tujuan: 'Tanjungpinang',
    durasi: '1 hari',
    harga: 350000,
    kouta: 20,
    status: 'Aktif',
  },
  {
    id: 'PKT-02',
    nama: 'Lagoi Getaway',
    tujuan: 'Bintan',
    durasi: '3 hari',
    harga: 2400000,
    kouta: 15,
    status: 'Aktif',
  },
];

let jadwals = [
  {
    id: 'JDW-01',
    paket: 'PKT-01',
    tujuan: 'Tanjungpinang',
    tgl: '12 Okt 2026',
    waktu: '08:00',
    transport: 'TRP-01',
  },
  {
    id: 'JDW-02',
    paket: 'PKT-02',
    tujuan: 'Bintan',
    tgl: '18 Okt 2026',
    waktu: '07:30',
    transport: 'TRP-02',
  },
];

let transports = [
  { id: 'TRP-01', nama: 'Kapal Cepat Bahari', jenis: 'Kapal', kap: 120 },
  { id: 'TRP-02', nama: 'Bus Pariwisata Kepri', jenis: 'Bus', kap: 45 },
  { id: 'TRP-03', nama: 'Speedboat Anambas', jenis: 'Speedboat', kap: 30 },
];

let pelanggans = [
  {
    id: 'PLG-01',
    nama: 'Rina Sari',
    user: 'rinasari',
    email: 'rina@email.com',
    telp: '0812-0000-0001',
    alamat: 'Batam',
  },
  {
    id: 'PLG-02',
    nama: 'Andi Putra',
    user: 'andiputra',
    email: 'andi@email.com',
    telp: '0812-0000-0002',
    alamat: 'Tanjungpinang',
  }
];

let pesanans = [
  { id: 'PSN-01', pelanggan: 'PLG-01', tgl: '02 Okt 2026', total: 700000, paket:'PKT-01', status: 'Menunggu' },
  { id: '-', pelanggan: '-', tgl:  '-', total: 0, status: '-' },
]

let bayars = [
  {
    id: 'PAY-01',
    pesanan: 'PSN-02',
    tgl: '03 Okt 2026',
    jumlah: 2400000,
    metode: 'Transfer Bank',
    status: 'Lunas',
  },
  {
    id: '-',
    pesanan: '-',
    tgl: '-',
    jumlah: 0,
    metode: '-',
    status: '-',
  },
];

/* 3. UTILITIES
   ========================================================================== */

/** Ambil elemen berdasarkan id. */
const $ = (id) => document.getElementById(id);

/** Ambil elemen pertama yang cocok dengan selector. */
const qs = (selector, scope = document) => scope.querySelector(selector);

/** Ambil semua elemen yang cocok dengan selector. */
const $$ = (selector, scope = document) => scope.querySelectorAll(selector);

/** Ubah angka menjadi format mata uang Rupiah. */
const rupiah = (amount) => `Rp${Number(amount || 0).toLocaleString('id-ID')}`;

/** Ubah teks menjadi angka (0 bila tidak valid). */
const toNumber = (value) => Number(value) || 0;

/** Huruf pertama dari sebuah nama, untuk avatar. */
const initials = (name) => (name || '').trim().charAt(0).toUpperCase() || 'A';

/** Cari satu record berdasarkan id. */
const findById = (collection, id) => collection.find((record) => record.id === id);

/** Gabungkan perubahan ke dalam satu record yang sudah ada. */
function updateRecord(collection, id, changes) {
  const record = findById(collection, id);
  if (record) Object.assign(record, changes);
  return record;
}

/** Buat id berikutnya yang tidak bentrok, mis. PKT-05. */
function nextId(collection, prefix) {
  const highest = collection.reduce((max, record) => {
    const number = Number(String(record.id).replace(`${prefix}-`, ''));
    return Number.isFinite(number) ? Math.max(max, number) : max;
  }, 0);

  return `${prefix}-${String(highest + 1).padStart(2, '0')}`;
}

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Cegah data pengguna ikut dieksekusi sebagai HTML. */
const escapeHtml = (text) => String(text ?? '').replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);

/** Warna badge untuk setiap status. */
const STATUS_TONE = {
  Aktif: 'b-green',
  Penuh: 'b-amber',
  Nonaktif: 'b-grey',
  Menunggu: 'b-amber',
  Dikonfirmasi: 'b-blue',
  Dibayar: 'b-green',
  Selesai: 'b-grey',
  Lunas: 'b-green',
  'Menunggu Verifikasi': 'b-blue',
  'Belum Lunas': 'b-amber',
};

const badgeClass = (status) => STATUS_TONE[status] || 'b-grey';

/* 4. TEMPLATE HELPERS
   ========================================================================== */

/** Judul halaman + area aksi di sebelah kanan. */
function pageHead(title, actions = '') {
  return `
    <div class="page-head">
      <h1>${title}</h1>
      ${actions}
    </div>
  `;
}

/** Tombol aksi pada baris tabel. */
function rowAction(label, action, id = '', variant = '') {
  const className = variant ? `act ${variant}` : 'act';

  return `<button type="button" class="${className}" data-action="${action}" data-id="${id}">${label}</button>`;
}

/** Tombol aksi umum (primary / outline). */
function actionButton(label, action, variant = 'btn-add') {
  return `<button type="button" class="${variant}" data-action="${action}">${label}</button>`;
}

/** Baris tombol Simpan / Batal untuk form di dalam modal. */
function formButtons(saveLabel, saveAction, cancelLabel, cancelAction) {
  return `
    <div class="form-actions">
      ${actionButton(saveLabel, saveAction, 'btn-solid')}
      ${actionButton(cancelLabel, cancelAction, 'btn-outline')}
    </div>
  `;
}

/** Elemen <input> beserta atribut opsionalnya. */
function inputField(id, { type = 'text', placeholder = '', value = '' } = {}) {
  const attributes = [`id="${id}"`];
  const fieldValue = value ?? '';

  if (type !== 'text') attributes.push(`type="${type}"`);
  if (placeholder) attributes.push(`placeholder="${placeholder}"`);
  if (fieldValue !== '') attributes.push(`value="${escapeHtml(fieldValue)}"`);

  return `<input ${attributes.join(' ')}>`;
}

/** Label + input dalam satu baris form. */
function field(label, id, options = {}) {
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      ${inputField(id, options)}
    </div>
  `;
}

/** Dua field bersebelahan. */
function twoCol(left, right) {
  return `<div class="two-col">${left}${right}</div>`;
}

/** Grup pilihan radio beserta judulnya. */
function radioGroup(label, name, options) {
  const radios = options
    .map(
      (option) => `
        <label class="radio-row">
          <input type="radio" name="${name}" value="${escapeHtml(option)}">
          <span>${escapeHtml(option)}</span>
        </label>
      `,
    )
    .join('');

  return `
    <div class="radio-group">
      <span class="group-label">${label}</span>
      <div class="radio-list">${radios}</div>
    </div>
  `;
}

/** Tandai radio tertentu sebagai terpilih. */
function selectRadio(name, value) {
  $$(`input[name="${name}"]`).forEach((radio) => {
    radio.checked = radio.value === value;
  });
}

/** Tabel HTML lengkap. */
function dataTable(headers, rows) {
  return `
    <table>
      <thead>
        <tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr>
      </thead>
      <tbody>${rows.join('')}</tbody>
    </table>
  `;
}

/** Tabel dibungkus kartu dengan border. */
function tableSection(headers, rows) {
  return `<div class="table-wrap">${dataTable(headers, rows)}</div>`;
}

function statusBadge(status) {
  return `<span class="badge ${badgeClass(status)}">${escapeHtml(status)}</span>`;
}

function statCard(label, icon, value) {
  return `
    <div class="stat-card">
      <div class="row">
        <div class="lbl">${label}</div>
        <div class="icn">${ICONS[icon]}</div>
      </div>
      <div class="num">${escapeHtml(String(value))}</div>
    </div>
  `;
}

/* 5. NAVIGATION
   ========================================================================== */

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { key: 'paket', label: 'Paket Travel', icon: 'paket' },
  { key: 'jadwal', label: 'Jadwal Perjalanan', icon: 'jadwal' },
  { key: 'transport', label: 'Transportasi', icon: 'transport' },
  { key: 'pelanggan', label: 'Pelanggan', icon: 'pelanggan' },
  { key: 'pemesanan', label: 'Pemesanan', icon: 'pemesanan' },
  { key: 'pembayaran', label: 'Pembayaran', icon: 'pembayaran' },
  { key: 'laporan', label: 'Laporan', icon: 'laporan' },
];

let currentPage = 'dashboard';

function buildNav() {
  $('nav').innerHTML = NAV_ITEMS.map(
    (item) => `
      <button
        type="button"
        class="${item.key === currentPage ? 'active' : ''}"
        data-action="nav"
        data-id="${item.key}"
      >
        ${ICONS[item.icon]}
        <span>${item.label}</span>
      </button>
    `,
  ).join('');
}

function navigateTo(page) {
  currentPage = page;
  closeFormModal();
  buildNav();
  render();
  toggleSidebar(false);
  window.scrollTo(0, 0);
}

function toggleSidebar(force) {
  const sidebar = $('sidebar');
  const overlay = $('sidebarOverlay');
  const isOpen = typeof force === 'boolean' ? force : !sidebar.classList.contains('open');

  sidebar.classList.toggle("open", isOpen);
  overlay.classList.toggle("show", isOpen)
}

/* 6. AUTH
   ========================================================================== */

const AUTH_PANELS = {
  login: { card: 'login-card', firstField: 'li-user' },
  register: { card: 'reg-card', firstField: 'r-nama' },
};

/** Tampilkan satu panel auth saja (login atau registrasi). */
function showAuthPanel(panel = 'Login') {
  const name = panel in AUTH_PANELS ? panel : 'Login';

  Object.entries(AUTH_PANELS).forEach(([key, config]) => {
    $(config.card).classList.toggle('is-hidden', key !== name);
  });

  $('li-err').textContent = '';
  $(AUTH_PANELS[name].firstField).focus();
}

function doLogin() {
  const username = $('li-user').value.trim();
  const password = $('li-pass').value;

  if (!username || !password) {
    $('li-err').textContent = 'Isi username dan password terlebih dahulu.';
    showToast('Username dan password wajib diisi.', 'error');
    return;
  }

  $('li-err').textContent = '';
  admin.username = username;
  admin.nama = admin.nama || 'Admin Kepri';

  enterApp();
  showToast(`Login berhasil. Selamat datang, ${admin.nama}!`, 'success', 3200);
}

function doRegister() {
  const nama = $('r-nama').value.trim();
  const username = $('r-user').value.trim();
  const email = $('r-email').value.trim();
  const telp = $('r-telp').value.trim();

  if (!nama || !username) {
    showToast('Lengkapi nama_admin dan username.', 'error');
    return;
  }

  admin = {
    nama,
    username,
    email,
    telp,
    id: `ADM-${Math.floor(Math.random() * 90 + 10)}`,
  };

  ['r-nama', 'r-user', 'r-email', 'r-telp', 'r-pass'].forEach((id) => {
    $(id).value = '';
  });

  $('li-user').value = username;
  showAuthPanel('login');
  showToast(`Registrasi berhasil. Akun ${username} siap digunakan.`, 'success', 3200);
}

function enterApp() {
  $('auth').classList.add ("is-hidden");
  $('app').classList.add('is-active');
  $('who-name').textContent = admin.nama;
  $('who-avatar').textContent = initials(admin.nama);

  buildNav();
  render();
}

function doLogout() {
  $('app').classList.remove('is-active');
  $('auth').classList.remove('is-hidden');
}

/* 7. TOAST
   ========================================================================== */

/** Ikon kecil sesuai jenis notifikasi. */
const TOAST_ICONS = {
  success:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  error:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  info:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 11v5M12 7.5h.01"/><circle cx="12" cy="12" r="9"/></svg>',
};

let toastTimer = null;

/**
 * Tampilkan notifikasi di bawah layar.
 * @param {string} message  teks yang ditampilkan
 * @param {'success'|'error'|'info'} type  jenis notifikasi
 * @param {number} duration  lama tampil dalam milidetik
 */
function showToast(message, type = 'info', duration = 2600) {
  const toast = $('toast');
  const kind = type in TOAST_ICONS ? type : 'info';

  $('toast-icon').innerHTML = TOAST_ICONS[kind];
  $('toast-text').textContent = message;

  toast.className = `toast ${kind}`;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

/* 8. FORMS & VIEWS
   ========================================================================== */

/** Peta kolom record ke id input untuk setiap form. */
const PAKET_FIELDS = {
  nama: 'pf-nama',
  tujuan: 'pf-tujuan',
  deskripsi: 'pf-deskripsi',
  fasilitas: 'pf-fasilitas',
  durasi: 'pf-durasi',
  kouta: 'pf-kouta',
  harga: 'pf-harga',
  status: 'pf-status',
};

const JADWAL_FIELDS = {
  paket: 'jf-paket',
  tujuan: 'jf-tujuan',
  tgl: 'jf-tgl',
  waktu: 'jf-waktu',
  transport: 'jf-transport',
};

const TRANSPORT_FIELDS = {
  nama: 'tf-nama',
  jenis: 'tf-jenis',
  kap: 'tf-kap',
};

/* --- Isi form (dipakai di dalam modal) ------------------------------------ */

function paketForm() {
  return `
    <p class="form-sub" id="paket-form-sub">${FORMS.paket.hint}</p>
    ${field('nama_paket', 'pf-nama')}
    ${field('tujuan', 'pf-tujuan')}
    ${field('deskripsi', 'pf-deskripsi')}
    ${field('fasilitas', 'pf-fasilitas')}
    ${twoCol(field('durasi', 'pf-durasi'), field('kouta', 'pf-kouta', { type: 'number' }))}
    ${field('harga', 'pf-harga', { type: 'number' })}
    ${field('status_paket', 'pf-status', { placeholder: 'Aktif / Penuh / Nonaktif' })}
    ${formButtons('Simpan', 'paket-save', 'Batal', 'modal-close')}
  `;
}

function jadwalForm() {
  return `
    <p class="form-sub" id="jadwal-form-sub">${FORMS.jadwal.hint}</p>
    ${field('id_paket', 'jf-paket', { placeholder: 'mis. PKT-01' })}
    ${field('tujuan', 'jf-tujuan')}
    ${field('tgl_berangkat', 'jf-tgl', { placeholder: 'mis. 12 Okt 2026' })}
    ${field('waktu_berangkat', 'jf-waktu', { placeholder: 'mis. 08:00' })}
    ${field('id_transportasi', 'jf-transport', { placeholder: 'mis. TRP-01' })}
    ${formButtons('Simpan', 'jadwal-save', 'Batal', 'modal-close')}
  `;
}

function transportForm() {
  return `
    <p class="form-sub" id="tr-form-sub">${FORMS.transport.hint}</p>
    ${field('nama_transportasi', 'tf-nama')}
    ${field('jenis_transportasi', 'tf-jenis')}
    ${field('kapasitas', 'tf-kap', { type: 'number' })}
    ${formButtons('Simpan', 'transport-save', 'Batal', 'modal-close')}
  `;
}

const FORMS = {
  paket: {
    title: 'Form Paket Travel',
    subtitle: 'paket-form-sub',
    hint: 'Isi data paket, lalu simpan.',
    fields: PAKET_FIELDS,
    template: paketForm,
  },
  jadwal: {
    title: 'Form Jadwal',
    subtitle: 'jadwal-form-sub',
    hint: 'Isi data jadwal, lalu simpan.',
    fields: JADWAL_FIELDS,
    template: jadwalForm,
  },
  transport: {
    title: 'Form Transportasi',
    subtitle: 'tr-form-sub',
    hint: 'Isi data kendaraan, lalu simpan.',
    fields: TRANSPORT_FIELDS,
    template: transportForm,
  },
};

/** Id record yang sedang diedit pada setiap form. */
const editing = { paket: null, jadwal: null, transport: null };

/* --- Modal form ----------------------------------------------------------- */

/** Entitas yang formnya sedang terbuka, null bila modal tertutup. */
let modalEntity = null;

/** Buka modal berisi form entitas tertentu, opsional dalam mode ubah. */
function openFormModal(entity, record = null) {
  const form = FORMS[entity];

  modalEntity = entity;
  $('modal-title').textContent = form.title;
  $('modal-body').innerHTML = form.template();
  $('modal').classList.add('is-open');
  $('modal').setAttribute('aria-hidden', 'false');

  if (record) {
    fillForm(entity, record);
  } else {
    resetForm(entity);
  }

  $(Object.values(form.fields)[0]).focus();
}

/** Tutup modal dan kembalikan form ke keadaan awal. */
function closeFormModal() {
  if (modalEntity) resetForm(modalEntity);

  modalEntity = null;
  $('modal').classList.remove('is-open');
  $('modal').setAttribute('aria-hidden', 'true');
}

/** Isi seluruh input form dengan nilai dari sebuah record. */
function fillForm(entity, record) {
  if (!record) return;

  const form = FORMS[entity];
  editing[entity] = record.id;

  Object.entries(form.fields).forEach(([key, inputId]) => {
    $(inputId).value = record[key] ?? '';
  });

  $(form.subtitle).textContent = `Mengubah ${record.id}`;
}

/** Baca seluruh input form menjadi objek data. */
function readForm(entity) {
  const form = FORMS[entity];

  return Object.entries(form.fields).reduce((data, [key, inputId]) => {
    data[key] = $(inputId).value.trim();
    return data;
  }, {});
}

/** Kosongkan form dan batalkan mode edit. */
function resetForm(entity) {
  const form = FORMS[entity];
  editing[entity] = null;

  Object.values(form.fields).forEach((inputId) => {
    $(inputId).value = '';
  });

  $(form.subtitle).textContent = form.hint;
}

/* --- Dashboard ----------------------------------------------------------- */

function renderDashboard() {
  const stats = [
    { label: 'Jumlah Pelanggan', icon: 'pelanggan', value: pelanggans.length },
    { label: 'Jumlah Paket Travel', icon: 'paket', value: pakets.length },
    { label: 'Jumlah Jadwal Perjalanan', icon: 'jadwal', value: jadwals.length },
    { label: 'Jumlah Pemesanan', icon: 'pemesanan', value: pesanans.length },
  ];

  return `
    ${pageHead('Dashboard')}
    <div class="stat-grid">
      ${stats.map((stat) => statCard(stat.label, stat.icon, stat.value)).join('')}
    </div>
  `;
}

/* --- Paket Travel -------------------------------------------------------- */

function renderPaket() {
  const rows = pakets.map(
    (paket) => `
      <tr>
        <td>${paket.id}</td>
        <td>${escapeHtml(paket.nama)}</td>
        <td>${escapeHtml(paket.tujuan)}</td>
        <td>${escapeHtml(paket.durasi)}</td>
        <td>${rupiah(paket.harga)}</td>
        <td>${paket.kouta}</td>
        <td>${statusBadge(paket.status)}</td>
        <td>
          ${rowAction('Lihat', 'paket-view', paket.id)}
          ${rowAction('Ubah', 'paket-edit', paket.id)}
          ${rowAction('Hapus', 'paket-delete', paket.id, 'danger')}
        </td>
      </tr>
    `,
  );

  return `
    ${pageHead('Paket Travel', actionButton('+ Tambah Paket', 'paket-add'))}
    ${tableSection(
      ['id_paket', 'nama_paket', 'tujuan', 'durasi', 'harga', 'kouta', 'status_paket', ''],
      rows,
    )}
  `;
}

function savePaket() {
  const data = readForm('paket');

  if (!data.nama) {
    showToast('nama_paket wajib diisi.', 'error');
    return;
  }

  data.durasi = data.durasi || '-';
  data.status = data.status || 'Aktif';
  data.kouta = toNumber(data.kouta);
  data.harga = toNumber(data.harga);

  if (editing.paket) {
    updateRecord(pakets, editing.paket, data);
    showToast('Paket diperbarui.');
  } else {
    pakets.push({ id: nextId(pakets, 'PKT'), ...data });
    showToast('Paket ditambahkan.');
  }

  closeFormModal();
  render();
}

function deletePaket(id) {
  pakets = pakets.filter((paket) => paket.id !== id);
  showToast(`${id} dihapus.`);
  render();
}

/* --- Jadwal Perjalanan --------------------------------------------------- */

function renderJadwal() {
  const rows = jadwals.map(
    (jadwal) => `
      <tr>
        <td>${jadwal.id}</td>
        <td>${escapeHtml(jadwal.paket)}</td>
        <td>${escapeHtml(jadwal.tujuan)}</td>
        <td>${escapeHtml(jadwal.tgl)}</td>
        <td>${escapeHtml(jadwal.waktu)}</td>
        <td>${escapeHtml(jadwal.transport)}</td>
        <td>
          ${rowAction('Lihat', 'jadwal-view', jadwal.id)}
          ${rowAction('Ubah', 'jadwal-edit', jadwal.id)}
          ${rowAction('Hapus', 'jadwal-delete', jadwal.id, 'danger')}
        </td>
      </tr>
    `,
  );

  return `
    ${pageHead('Jadwal Perjalanan', actionButton('+ Tambah Jadwal', 'jadwal-add'))}
    ${tableSection(
      [
        'id_jadwal',
        'id_paket',
        'tujuan',
        'tgl_berangkat',
        'waktu_berangkat',
        'id_transportasi',
        '',
      ],
      rows,
    )}
  `;
}

function saveJadwal() {
  const data = readForm('jadwal');

  if (!data.paket) {
    showToast('id_paket wajib diisi.', 'error');
    return;
  }

  if (editing.jadwal) {
    updateRecord(jadwals, editing.jadwal, data);
    showToast('Jadwal diperbarui.');
  } else {
    jadwals.push({ id: nextId(jadwals, 'JDW'), ...data });
    showToast('Jadwal ditambahkan.');
  }

  closeFormModal();
  render();
}

function deleteJadwal(id) {
  jadwals = jadwals.filter((jadwal) => jadwal.id !== id);
  showToast(`${id} dihapus.`);
  render();
}

/* --- Transportasi -------------------------------------------------------- */

function renderTransport() {
  const rows = transports.map(
    (transport) => `
      <tr>
        <td>${transport.id}</td>
        <td>${escapeHtml(transport.nama)}</td>
        <td>${escapeHtml(transport.jenis)}</td>
        <td>${transport.kap}</td>
        <td>${rowAction('Ubah', 'transport-edit', transport.id)}</td>
      </tr>
    `,
  );

  return `
    ${pageHead('Transportasi', actionButton('+ Tambah Kendaraan', 'transport-add'))}
    ${tableSection(
      ['id_transportasi', 'nama_transportasi', 'jenis_transportasi', 'kapasitas', ''],
      rows,
    )}
  `;
}

function saveTransport() {
  const data = readForm('transport');

  if (!data.nama) {
    showToast('nama_transportasi wajib diisi.', 'error');
    return;
  }

  data.kap = toNumber(data.kap);

  if (editing.transport) {
    updateRecord(transports, editing.transport, data);
    showToast('Transportasi diperbarui.');
  } else {
    transports.push({ id: nextId(transports, 'TRP'), ...data });
    showToast('Transportasi ditambahkan.');
  }

  closeFormModal();
  render();
}

/* --- Pelanggan ----------------------------------------------------------- */

function renderPelanggan() {
  const rows = pelanggans.map(
    (pelanggan) => `
      <tr>
        <td>${pelanggan.id}</td>
        <td>${escapeHtml(pelanggan.nama)}</td>
        <td>${escapeHtml(pelanggan.user)}</td>
        <td>${escapeHtml(pelanggan.email)}</td>
        <td>${escapeHtml(pelanggan.telp)}</td>
        <td>${escapeHtml(pelanggan.alamat)}</td>
        <td>
          ${rowAction('Lihat', 'pelanggan-view', pelanggan.id)}
          ${rowAction('Ubah', 'pelanggan-edit', pelanggan.id)}
          ${rowAction('Hapus', 'pelanggan-delete', pelanggan.id, 'danger')}
        </td>
      </tr>
    `,
  );

  return `
    ${pageHead('Data Pelanggan')}
    ${tableSection(
      ['id_pelanggan', 'nama', 'username', 'email', 'no_telp', 'alamat', ''],
      rows,
    )}
  `;
}

function deletePelanggan(id) {
  pelanggans = pelanggans.filter((pelanggan) => pelanggan.id !== id);
  showToast(`${id} dihapus.`);
  render();
}

/* --- Pemesanan ----------------------------------------------------------- */

const PESANAN_STATUS = ['Menunggu', 'Dikonfirmasi', 'Dibayar', 'Selesai'];

/** Nama paket dari id_paket yang dipakai sebuah pesanan. */
const paketName = (id) => findById(pakets, id)?.nama || id || '-';

function renderPemesanan() {
  const rows = pesanans.map(
    (pesanan) => `
      <tr>
        <td>${pesanan.id}</td>
        <td>${escapeHtml(pesanan.pelanggan)}</td>
        <td>${escapeHtml(paketName(pesanan.paket))}</td>
        <td>${escapeHtml(pesanan.tgl)}</td>
        <td>${rupiah(pesanan.total)}</td>
        <td>${statusBadge(pesanan.status)}</td>
        <td>${rowAction('Lihat', 'pemesanan-view', pesanan.id)}</td>
      </tr>
    `,
  );

  return `
    ${pageHead('Pemesanan')}
    <div class="layout-split">
      ${tableSection(
        [
          'id_pemesanan',
          'id_pelanggan',
          'jenis_paket',
          'tgl_pemesanan',
          'total_harga',
          'status_pemesanan',
          '',
        ],
        rows,
      )}
      <div class="side-form">
        <h3>Ubah Status Pemesanan</h3>
        ${field('id_pemesanan', 'pm-id', { placeholder: 'mis. PSN-01' })}
        ${radioGroup('status_pemesanan', 'pmstatus', PESANAN_STATUS)}
        ${actionButton('Simpan Status', 'pemesanan-save', 'btn-solid')}
      </div>
    </div>
  `;
}

function fillPemesananForm(id) {
  const pesanan = findById(pesanans, id);
  if (!pesanan) return;

  $('pm-id').value = pesanan.id;
  selectRadio('pmstatus', pesanan.status);
}

function savePemesananStatus() {
  const id = $('pm-id').value.trim();
  const selected = qs('input[name="pmstatus"]:checked');
  const pesanan = findById(pesanans, id);

  if (!pesanan || !selected) {
    showToast('Pilih id_pemesanan dan status terlebih dahulu.');
    return;
  }

  pesanan.status = selected.value;
  showToast(`Status ${id} diperbarui menjadi ${selected.value}.`);
  render();
}

/* --- Pembayaran ---------------------------------------------------------- */

function renderPembayaran() {
  const rows = bayars.map(
    (bayar) => `
      <tr>
        <td>${bayar.id}</td>
        <td>${escapeHtml(bayar.pesanan)}</td>
        <td>${escapeHtml(bayar.tgl)}</td>
        <td>${rupiah(bayar.jumlah)}</td>
        <td>${escapeHtml(bayar.metode)}</td>
        <td>${statusBadge(bayar.status)}</td>
        <td>${rowAction('Lihat', 'pembayaran-view', bayar.id)}</td>
      </tr>
    `,
  );

  return `
    ${pageHead('Pembayaran')}
    <div class="layout-split">
      ${tableSection(
        [
          'id_pembayaran',
          'id_pemesanan',
          'tgl_pembayaran',
          'jumlah_pembayaran',
          'metode_pembayaran',
          'status_pembayaran',
          '',
        ],
        rows,
      )}
      <div class="side-form">
        <h3>Ubah Status Pembayaran</h3>
        ${field('id_pembayaran', 'by-id', { placeholder: 'mis. PAY-01' })}
        ${field('status_pembayaran', 'by-status', { placeholder: 'mis. Lunas' })}
        ${actionButton('Simpan Status', 'pembayaran-save', 'btn-solid')}
      </div>
    </div>
  `;
}

function fillBayarForm(id) {
  const bayar = findById(bayars, id);
  if (!bayar) return;

  $('by-id').value = bayar.id;
  $('by-status').value = bayar.status;
}

function saveBayarStatus() {
  const id = $('by-id').value.trim();
  const status = $('by-status').value.trim();
  const bayar = findById(bayars, id);

  if (!bayar || !status) {
    showToast('Isi id_pembayaran dan status.');
    return;
  }

  bayar.status = status;
  showToast(`Status ${id} diperbarui.`);
  render();
}

/* --- Laporan ------------------------------------------------------------- */

function reportCard(title, headers, rows) {
  return `
    <div class="report-card">
      <h3>${title}</h3>
      ${dataTable(headers, rows)}
    </div>
  `;
}

function renderLaporan() {
  const pesananRows = pesanans.map(
    (pesanan) => `
      <tr>
        <td>${pesanan.id}</td>
        <td>${escapeHtml(pesanan.pelanggan)}</td>
        <td>${escapeHtml(pesanan.tgl)}</td>
        <td>${rupiah(pesanan.total)}</td>
        <td>${statusBadge(pesanan.status)}</td>
      </tr>
    `,
  );

  const bayarRows = bayars.map(
    (bayar) => `
      <tr>
        <td>${bayar.id}</td>
        <td>${escapeHtml(bayar.pesanan)}</td>
        <td>${escapeHtml(bayar.tgl)}</td>
        <td>${rupiah(bayar.jumlah)}</td>
        <td>${statusBadge(bayar.status)}</td>
      </tr>
    `,
  );

  return `
    ${pageHead(
      'Laporan Pemesanan dan Pembayaran',
      `<div class="stack">
        ${actionButton('Unduh PDF', 'laporan-pdf', 'btn-tampilkan')}
        ${actionButton('Unduh Excel', 'laporan-excel')}
      </div>`,
    )}
    <div class="filters">
      ${field('Dari tanggal', 'lp-from', { type: 'date' })}
      ${field('Sampai tanggal', 'lp-to', { type: 'date' })}
      ${actionButton('Tampilkan', 'laporan-show', 'btn-tampilkan')}
    </div>
    ${reportCard(
      'Laporan Pemesanan',
      ['id_pemesanan', 'id_pelanggan', 'tgl_pemesanan', 'total_harga', 'status_pemesanan'],
      pesananRows,
    )}
    ${reportCard(
      'Laporan Pembayaran',
      ['id_pembayaran', 'id_pemesanan', 'tgl_pembayaran', 'jumlah_pembayaran', 'status_pembayaran'],
      bayarRows,
    )}
  `;
}

/* --- Profil -------------------------------------------------------------- */

function renderProfil() {
  return `
    ${pageHead('Profil Admin')}
    <div class="profile-card">
      <div class="profile-top">
        <div class="avatar">${escapeHtml(initials(admin.nama))}</div>
        <div>
          <div class="nm">${escapeHtml(admin.nama)}</div>
          <div class="id">${escapeHtml(admin.id)}</div>
        </div>
      </div>
      <div class="grid2">
        ${field('nama_admin', 'pr-nama', { value: admin.nama })}
        ${field('username', 'pr-user', { value: admin.username })}
        ${field('email', 'pr-email', { value: admin.email })}
        ${field('no_telp', 'pr-telp', { value: admin.telp })}
        ${field('password baru', 'pr-pass', { type: 'password', placeholder: '••••••••' })}
        ${field('konfirmasi password', 'pr-pass2', { type: 'password', placeholder: '••••••••' })}
      </div>
      <div class="form-actions">
        ${actionButton('Simpan Perubahan', 'profil-save', 'btn-solid')}
        ${actionButton('Batal', 'profil-cancel', 'btn-outline')}
      </div>
    </div>
  `;
}

function saveProfil() {
  const password = $('pr-pass').value;
  const confirmation = $('pr-pass2').value;

  if (password !== confirmation) {
    showToast('Konfirmasi password tidak cocok.');
    return;
  }

  admin.nama = $('pr-nama').value.trim() || admin.nama;
  admin.username = $('pr-user').value.trim() || admin.username;
  admin.email = $('pr-email').value.trim();
  admin.telp = $('pr-telp').value.trim();

  $('who-name').textContent = admin.nama;
  $('who-avatar').textContent = initials(admin.nama);

  showToast('Profil diperbarui.');
  render();
}

/* --- Router -------------------------------------------------------------- */

const VIEWS = {
  dashboard: renderDashboard,
  paket: renderPaket,
  jadwal: renderJadwal,
  transport: renderTransport,
  pelanggan: renderPelanggan,
  pemesanan: renderPemesanan,
  pembayaran: renderPembayaran,
  laporan: renderLaporan,
  profil: renderProfil,
};

function render() {
  const view = VIEWS[currentPage] || VIEWS.dashboard;
  $('content').innerHTML = view();
}

/* ==========================================================================
   9. ACTIONS
   ========================================================================== */

/**
 * Semua aksi memakai delegasi event: satu listener menangkap klik pada
 * elemen mana pun yang memiliki atribut data-action.
 */
const ACTIONS = {
  nav: navigateTo,

  login: doLogin,
  register: doRegister,
  logout: doLogout,
  'auth-login': () => showAuthPanel('login'),
  'auth-register': () => showAuthPanel('register'),
  'sidebar-toggle': () => toggleSidebar(),
  'sidebar-close': () => toggleSidebar(false),

  'modal-close': closeFormModal,

  'paket-add': () => openFormModal('paket'),
  'paket-save': savePaket,
  'paket-view': (id) => showToast(`Menampilkan detail ${id}`),
  'paket-edit': (id) => openFormModal('paket', findById(pakets, id)),
  'paket-delete': deletePaket,

  'jadwal-add': () => openFormModal('jadwal'),
  'jadwal-save': saveJadwal,
  'jadwal-view': (id) => showToast(`Menampilkan detail ${id}`),
  'jadwal-edit': (id) => openFormModal('jadwal', findById(jadwals, id)),
  'jadwal-delete': deleteJadwal,

  'transport-add': () => openFormModal('transport'),
  'transport-save': saveTransport,
  'transport-edit': (id) => openFormModal('transport', findById(transports, id)),

  'pelanggan-view': (id) => showToast(`Menampilkan detail ${id}`),
  'pelanggan-edit': (id) => showToast(`Buka form ubah ${id}`),
  'pelanggan-delete': deletePelanggan,

  'pemesanan-view': fillPemesananForm,
  'pemesanan-save': savePemesananStatus,

  'pembayaran-view': fillBayarForm,
  'pembayaran-save': saveBayarStatus,

  'laporan-pdf': () => showToast('Menyiapkan unduhan PDF...'),
  'laporan-excel': () => showToast('Menyiapkan unduhan Excel...'),
  'laporan-show': () => showToast('Laporan ditampilkan.'),

  'profil-save': saveProfil,
  'profil-cancel': () => render(),
};

function handleAction(event) {
  const trigger = event.target.closest('[data-action]');
  if (!trigger) return;

  const action = ACTIONS[trigger.dataset.action];
  if (action) action(trigger.dataset.id);
}

/* ==========================================================================
   10. INITIALIZATION
   ========================================================================== */

/** Satu listener untuk seluruh aksi klik pada halaman. */
function init() {
  document.addEventListener('click', handleAction);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalEntity) closeFormModal();
  });
}

init();
