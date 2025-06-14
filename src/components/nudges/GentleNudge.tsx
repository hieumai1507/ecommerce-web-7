"use client";

interface GentleNudgeProps {
    productTitle: string;
    onAcceptAction: () => void;
    onRejectAction: () => void;
}

/**
 * GentleNudge component prompts the user to reconsider an impulse purchase.
 * It provides options to either proceed with the purchase or cancel it.
 * @param productTitle - The title of the product being purchased.
 * @param onAcceptAction - Action to take if the user decides to cancel the purchase.
 * @param onRejectAction - Action to take if the user decides to proceed with the purchase.
 * @constructor
 */
export default function GentleNudge({productTitle, onAcceptAction, onRejectAction}: GentleNudgeProps) {
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md mx-4">
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">
                    💡 Reconsider This Purchase
                </h3>
                <p className="mb-4 text-gray-700">
                    Are you sure you want to buy <strong>{productTitle}</strong>?
                    This seems like it might be an impulse purchase. Take a moment to think about it.
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={onRejectAction}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                    >
                        Proceed Anyway
                    </button>
                    <button
                        onClick={onAcceptAction}
                        className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition cursor-pointer"
                    >
                        Cancel Purchase
                    </button>
                </div>
            </div>
        </div>
    );
}
