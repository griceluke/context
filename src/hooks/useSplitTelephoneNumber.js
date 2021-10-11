const useSplitTelephoneNumber = (phoneNumber) => {
    return (
        phoneNumber.substring(0, 6) + ' ' + phoneNumber.substring(6, 12)
    );
}
export default useSplitTelephoneNumber;