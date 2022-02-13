# Frontend for Worq-TODO

Bu proje [React.js](https://reactjs.org/) ile hazırlanmış bir todo uygulamasıdır. Backend için [backend-worq-todo](https://github.com/caglardur/backend-worq-todo) kullanılmıştır.

Kullanılan paketler:

- [Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/)
- [Bootstrep](https://getbootstrap.com/)
- [Google Font Icon](https://fonts.google.com/icons)
- [React Moment](https://github.com/headzoo/react-moment#readme)

## Repository Klonlama

Repository'i kendi bilgisayarınıza klonlayın.

```bash
git clone https://github.com/caglardur/frontend-worq-todo.git
```

Aşağıdaki komut ile Npm paketlerini yükleyin.

```bash
cd frontend-worq-todo
npm install
```

## ENV file örneği:

Backend'in çalıştığı portu .env dosyasına eklemeyi unutmayın:

```bash
REACT_APP_DB_HOST = "http://localhost:5050/api/"
```

## Çalıştırma

Projeyi çalıştırmak için aşağıdaki komutu terminalinize yazın.

```bash
npm start
```
