<script>
  import { updateOrderStatus } from '@/stores/main.js';
  export let translation;
  export let data;

  let parsedData = data.data;
  let selectedStatus = parsedData.status;

  let orderStatuses = [
    { value: 0, label: 'Pending', color: 'bg-yellow-500' },
    { value: 1, label: 'Seen', color: 'bg-blue-500' },
    { value: 2, label: 'Delivering', color: 'bg-green-500' },
    { value: 3, label: 'Delivered', color: 'bg-purple-500' },
    { value: 5, label: 'Cancelled', color: 'bg-red-500' },
  ];

  const onButtonClick = async (e) => {
    e.preventDefault();
    await updateOrderStatus(parsedData._id, { status_code: selectedStatus });
    parsedData.status = selectedStatus;
  };

  const getStatusLabel = (value) =>
    orderStatuses.find((status) => status.value === value)?.label || 'Unknown';

  const getStatusColor = (value) =>
    orderStatuses.find((status) => status.value === value)?.color ||
    'bg-gray-500';
</script>

<section class="size-full flex flex-col gap-4">
  <h1 class="font-bold text-5xl">Order Data</h1>
  <form on:submit={onButtonClick} class="w-full flex gap-4 justify-end">
    <select
      id="status"
      name="status"
      class="border w-32 h-8 border-solid rounded-md"
      bind:value={selectedStatus}
    >
      {#each orderStatuses as status}
        <option value={status.value}>{status.label}</option>
      {/each}
    </select>
    <button type="submit" class="rounded-xl w-32 h-8 font-bold bg-stone-400">
      Update
    </button>
  </form>
  <table class="min-w-full table-auto">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 text-left">Field</th>
        <th class="p-2 text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <!-- Customer Data Section -->
      <tr class="bg-gray-200">
        <td colspan="2" class="p-2 font-bold">Customer Data</td>
      </tr>
      <tr>
        <td class="p-2">Customer ID</td>
        <td class="p-2">{parsedData.account_id}</td>
      </tr>
      <tr>
        <td class="p-2">First Name</td>
        <td class="p-2">{parsedData.personal_data.first_name}</td>
      </tr>
      <tr>
        <td class="p-2">Last Name</td>
        <td class="p-2">{parsedData.personal_data.last_name}</td>
      </tr>

      <!-- Order Data Section -->
      <tr class="bg-gray-200">
        <td colspan="2" class="p-2 font-bold">Order Data</td>
      </tr>
      <tr>
        <td class="p-2">Order ID</td>
        <td class="p-2">{parsedData._id}</td>
      </tr>
      <tr>
        <td class="p-2">Order Status</td>
        <td class="p-2">
          <span
            class={`inline-block px-2 py-1 rounded-md ${getStatusColor(
              parsedData.status
            )}`}
          >
            {getStatusLabel(parsedData.status)}
          </span>
        </td>
      </tr>
      <tr>
        <td class="p-2">Total Price</td>
        <td class="p-2">{parsedData.price}</td>
      </tr>

      <!-- Delivery Data Section -->
      <tr class="bg-gray-200">
        <td colspan="2" class="p-2 font-bold">Delivery Data</td>
      </tr>
      <tr>
        <td class="p-2">Country</td>
        <td class="p-2">{parsedData.personal_data.delivery_data.country}</td>
      </tr>
      <tr>
        <td class="p-2">City</td>
        <td class="p-2">{parsedData.personal_data.delivery_data.city}</td>
      </tr>
      <tr>
        <td class="p-2">Address</td>
        <td class="p-2">{parsedData.personal_data.delivery_data.address}</td>
      </tr>
      <tr>
        <td class="p-2">Postcode</td>
        <td class="p-2">{parsedData.personal_data.delivery_data.postcode}</td>
      </tr>
    </tbody>
  </table>
</section>
