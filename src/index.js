function greeting() {
  return 'Hello from inventory-api-lab';
}

if (require.main === module) {
  console.log(greeting());
}

module.exports = { greeting };
