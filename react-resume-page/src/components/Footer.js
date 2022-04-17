function Footer() {
    const newDate = new Date().getFullYear();

    return (
        <div className="grid-footer">
            <span>&copy; { newDate } by Szabolcs Derzsi</span>
        </div>
    )
}

export default Footer;